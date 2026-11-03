export const siteConfig = {
    name: "Clínica Odontológica",
    slogan: "Seu sorriso merece cuidado especial.",
  
    phone: "5511999999999",
    email: "contato@seudominio.com.br",
  
    address: {
      street: "Rua Exemplo, 100",
      neighborhood: "Centro",
      city: "Sua Cidade",
      state: "UF",
      zip: "00000-000",
    },
  
    cro: "CRO-UF 00000",
  
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação odontológica.",
  
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  
    mapsEmbed: "",
  
    analytics: {
      gtm: "",
      ga4: "",
      metaPixel: "",
    },
  
    formEndpoint: "",
  };
  
  export const whatsappLink = (message = siteConfig.whatsappMessage) => {
    return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
  };