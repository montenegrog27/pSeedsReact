// Función serverless de Vercel: recibe el formulario de contacto y envía el
// correo con Resend (https://resend.com). La API key nunca llega al navegador.
//
// Variables de entorno (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      (obligatoria) API key de Resend
//   CONTACT_TO_EMAIL    destinatario de las consultas (por defecto info@paradigmaseed.com)
//   CONTACT_FROM_EMAIL  remitente; debe ser de un dominio verificado en Resend
//                       (por defecto "Paradigma Seeds <onboarding@resend.dev>")

const LIMITS = { name: 100, email: 120, phone: 20, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+()\s-]{6,20}$/;

// Límite simple por IP (por instancia de la función): 5 envíos cada 10 minutos.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );

const clean = (v) => (typeof v === "string" ? v.trim() : "");

export function validate(body) {
  const data = {
    name: clean(body?.name),
    email: clean(body?.email),
    phone: clean(body?.phone),
    message: clean(body?.message),
  };
  for (const [field, max] of Object.entries(LIMITS)) {
    if (!data[field]) return { error: "Complete todos los campos." };
    if (data[field].length > max) return { error: "Alguno de los campos es demasiado largo." };
  }
  if (!EMAIL_RE.test(data.email)) return { error: "Ingrese un email válido." };
  if (!PHONE_RE.test(data.phone)) return { error: "Ingrese un número de teléfono válido." };
  return { data };
}

function buildEmail({ name, email, phone, message }) {
  const rows = [
    ["Nombre", name],
    ["Email", email],
    ["Celular", phone],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666"><strong>${label}</strong></td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#171717">
      <h2 style="margin:0 0 16px">Nueva consulta desde la web</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <h3 style="margin:24px 0 8px">Mensaje</h3>
      <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px;margin:0">${escapeHtml(message)}</p>
      <p style="color:#999;font-size:12px;margin-top:24px">Responda este correo para contestarle directamente a ${escapeHtml(name)}.</p>
    </div>`;

  const text = `Nueva consulta desde la web\n\nNombre: ${name}\nEmail: ${email}\nCelular: ${phone}\n\nMensaje:\n${message}\n`;

  return { html, text };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body;

  // Honeypot: si viene completo es un bot. Respondemos OK sin enviar nada.
  if (clean(body?.website)) return res.status(200).json({ ok: true });

  const { data, error } = validate(body);
  if (error) return res.status(400).json({ error });

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Demasiados envíos. Intente nuevamente en unos minutos." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Falta la variable de entorno RESEND_API_KEY");
    return res.status(500).json({ error: "El servicio de correo no está configurado." });
  }

  const { html, text } = buildEmail(data);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Paradigma Seeds <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "info@paradigmaseed.com"],
        reply_to: data.email,
        subject: `Nueva consulta web de ${data.name.replace(/\s+/g, " ")}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Error de Resend:", response.status, await response.text());
      return res.status(502).json({ error: "No pudimos enviar el mensaje." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error al contactar a Resend:", err);
    return res.status(502).json({ error: "No pudimos enviar el mensaje." });
  }
}

function safeParse(s) {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
