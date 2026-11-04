export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido." });
    }
  
    const { name, phone, subject, website } = req.body || {};
  
    // Campo invisível para identificar envios automatizados simples.
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
        error: "Informe seu nome e telefone.",
      });
    }
  
    if (lead.name.length < 2 || lead.phone.length < 8) {
      return res.status(400).json({
        error: "Confira os dados informados.",
      });
    }
  
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.LEAD_API_SECRET;
  
    if (!scriptUrl || !secret) {
      return res.status(500).json({
        error: "Integração ainda não configurada.",
      });
    }
  
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...lead, secret }),
        redirect: "follow",
      });
  
      const result = await response.json();
  
      if (!response.ok || !result.success) {
        throw new Error("Falha ao registrar contato.");
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Erro ao salvar contato:", error.message);
  
      return res.status(502).json({
        error: "Não foi possível enviar. Tente novamente.",
      });
    }
  }