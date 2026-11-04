export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Método não permitido.",
    });
  }

  const { name, phone, subject, website } = req.body || {};

  // Proteção contra bots simples.
  if (website) {
    return res.status(200).json({ success: true });
  }

  const clean = (value, max = 120) =>
    String(value || "").trim().replace(/[<>]/g, "").slice(0, max);

  const lead = {
    name: clean(name),
    phone: clean(phone, 30),
    subject: clean(subject, 100),
  };

  if (!lead.name || !lead.phone) {
    return res.status(400).json({
      success: false,
      error: "Informe seu nome e telefone.",
    });
  }

  if (lead.name.length < 2 || lead.phone.length < 8) {
    return res.status(400).json({
      success: false,
      error: "Confira os dados informados.",
    });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.LEAD_API_SECRET;

  if (!scriptUrl || !secret) {
    console.error("Variáveis de ambiente ausentes:", {
      GOOGLE_SCRIPT_URL: !!scriptUrl,
      LEAD_API_SECRET: !!secret,
    });

    return res.status(500).json({
      success: false,
      error: "Integração ainda não configurada.",
    });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        ...lead,
        secret,
      }),
      redirect: "follow",
    });

    // Lê a resposta como texto para identificar HTML, vazio ou JSON.
    const responseText = await response.text();

    console.log("Resposta do Google Apps Script:", {
      status: response.status,
      contentType: response.headers.get("content-type"),
      finalUrl: response.url,
      body: responseText.substring(0, 1000),
    });

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      throw new Error(
        `Resposta inválida do Google Apps Script. HTTP ${response.status}. Conteúdo: ${responseText.substring(0, 300)}`
      );
    }

    if (!response.ok) {
      throw new Error(
        `Google Apps Script retornou HTTP ${response.status}: ${JSON.stringify(result)}`
      );
    }

    if (!result.success) {
      throw new Error(
        `Google Apps Script recusou o contato: ${result.error || "Erro não informado"}`
      );
    }

    return res.status(200).json({
      success: true,
      message: "Contato registrado.",
    });

  } catch (error) {
    console.error("ERRO NA INTEGRAÇÃO GOOGLE SHEETS:", error);

    return res.status(502).json({
      success: false,
      error: "Não foi possível registrar o contato. Verifique os logs da integração.",
    });
  }
}