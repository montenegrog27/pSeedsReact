// Datos de contacto compartidos por toda la web.
export const WHATSAPP_DISPLAY = "379 5389253";
// Formato internacional para Argentina: 54 + 9 + código de área + número (sin 0 ni 15)
export const WHATSAPP_NUMBER = "5493795389253";

const WHATSAPP_DEFAULT_TEXT =
  "Hola, vengo de la web de Paradigma Seeds, quiero más información sobre...";

export const whatsappUrl = (text = WHATSAPP_DEFAULT_TEXT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/paradigma.seeds/",
  facebook: "https://www.facebook.com/share/Cmwm3uQzcRhkHrFT/?mibextid=qi2Omg",
  linkedin: "https://ar.linkedin.com/in/paradigmaseeds",
};

export const NAV_LINKS = [
  { id: "nosotros", label: "Nosotros" },
  { id: "que-hacemos", label: "Qué hacemos" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

// Cloudinary: f_auto/q_auto sirven WebP/AVIF comprimido según el navegador,
// y w_ redimensiona en el servidor para no descargar imágenes gigantes.
const CLD = "https://res.cloudinary.com/dsbrnqc5z/image/upload";
const cld = (path, width) =>
  `${CLD}/f_auto,q_auto${width ? `,w_${width}` : ""}/${path}`;

export const IMAGES = {
  logo: cld("v1727390894/images/Logo_lkdzsg.png", 400),
  logoSymbol: cld("v1727392658/images/PS_simbolo_blanco_Preferente_o7ilqx.png", 160),
  hero: cld("v1727390896/images/PSsinfondo2_j68epl.png", 1000),
  texture: cld("v1727390895/images/Frame49_stujar.jpg", 1200),
  nosotrosBg: cld("v1727390895/images/backgroundNosotros_whfzhn.png", 1920),
  servicios: cld("v1727404146/images/imagen44_podfgh.png", 900),
  carousel: [
    { src: cld("v1727395792/images/carrousel2_usirp3.png", 800), alt: "Cultivo de Paradigma Seeds" },
    { src: cld("v1727395815/images/carrousel1_kyosda.png", 800), alt: "Genética de Paradigma Seeds" },
    { src: cld("v1727390896/images/PSsinfondo3_wsim2y.png", 800), alt: "Variedad de Paradigma Seeds" },
  ],
};
