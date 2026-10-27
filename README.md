# Paradigma Seeds

Landing page de Paradigma Seeds — React 18 + Vite + Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # genera dist/
npm run preview  # sirve el build localmente
```

## Formulario de contacto (Vercel + Resend)

El formulario de la sección **Contacto** envía los datos a la función serverless
`api/contacto.js`, que valida los campos y manda el correo con [Resend](https://resend.com).
La API key queda en el servidor y nunca se expone en el navegador.

Las consultas llegan a **info@paradigmaseed.com**. Al presionar "Responder" se le contesta
directamente al cliente (se usa su email como *Reply-To*).

### Configuración (una sola vez)

1. Crear una cuenta en <https://resend.com> y generar una **API key** (*API Keys → Create*).
2. Verificar el dominio `paradigmaseeds.com` (el dominio de la web, desde el que se envía) en Resend (*Domains → Add Domain*) y agregar
   los registros DNS que indica en el proveedor del dominio. Hasta que esté verificado,
   Resend solo permite enviar desde `onboarding@resend.dev` y únicamente al email con el
   que se creó la cuenta de Resend.
3. En Vercel → proyecto → *Settings → Environment Variables*, agregar:

   | Variable | Valor |
   |---|---|
   | `RESEND_API_KEY` | la API key de Resend |
   | `CONTACT_TO_EMAIL` | `info@paradigmaseed.com` (opcional, es el valor por defecto) |
   | `CONTACT_FROM_EMAIL` | `Paradigma Seeds <contacto@paradigmaseeds.com>` (una vez verificado el dominio) |

4. Volver a desplegar (*Deployments → Redeploy*) para que tome las variables.

### Probar en local

Copiar `.env.example` a `.env`, completar `RESEND_API_KEY` y ejecutar `npm run dev`.
El servidor de desarrollo sirve también `/api/contacto`, igual que Vercel.

### Protecciones

- Validación de campos en el navegador y en el servidor.
- Campo oculto *honeypot* contra bots.
- Límite de 5 envíos cada 10 minutos por IP.
- El contenido del mensaje se escapa antes de armar el HTML del correo.

## Datos de contacto

El número de WhatsApp está centralizado en `src/config.js`.
