// Datos de contacto compartidos por toda la web.
export const WHATSAPP_DISPLAY = "379 5389253";
// Formato internacional para Argentina: 54 + 9 + código de área + número (sin 0 ni 15)
export const WHATSAPP_NUMBER = "5493795389253";

const WHATSAPP_DEFAULT_TEXT =
  "Hola, vengo de la web de Paradigma Seeds, quiero más información sobre...";

export const whatsappUrl = (text = WHATSAPP_DEFAULT_TEXT) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
