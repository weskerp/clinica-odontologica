import { useState } from "react";

import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  Sparkles,
  CheckCircle2,
  CalendarDays,
  Smile,
  Stethoscope,
  ChevronDown,
  MonitorSmartphone,
  Users,
  Award,
} from "lucide-react";

import {
  siteConfig,
  whatsappLink,
} from "./config/site";

const treatments = [
  {
    icon: Smile,
    title: "Clareamento dental",
    description:
      "Conheça as possibilidades para cuidar da aparência do seu sorriso.",
  },
  {
    icon: Stethoscope,
    title: "Implantes dentários",
    description:
      "Avaliação e planejamento de soluções para reposição dentária.",
  },
  {
    icon: Sparkles,
    title: "Facetas dentárias",
    description:
      "Conheça as opções de tratamento estético para os dentes.",
  },
  {
    icon: Heart,
    title: "Ortodontia",
    description:
      "Acompanhamento odontológico para alinhamento dos dentes.",
  },
  {
    icon: ShieldCheck,
    title: "Limpeza e prevenção",
    description:
      "Cuidados preventivos para manter a saúde bucal em dia.",
  },
  {
    icon: Users,
    title: "Clínica geral",
    description:
      "Avaliações e cuidados odontológicos para diferentes necessidades.",
  },
];

const differentials = [
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description:
      "Atenção individualizada, escuta e respeito às necessidades de cada paciente.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia",
    description:
      "Recursos e equipamentos utilizados para apoiar o planejamento dos tratamentos.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e cuidado",
    description:
      "Protocolos de atendimento e cuidados em todas as etapas.",
  },
  {
    icon: Award,
    title: "Qualidade profissional",
    description:
      "Profissionais habilitados e compromisso com a ética odontológica.",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em contato",
    description:
      "Fale com nossa equipe pelo WhatsApp ou formulário.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Agende sua avaliação",
    description:
      "Consulte os horários disponíveis e escolha o melhor para você.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Realize sua consulta",
    description:
      "O profissional avaliará suas necessidades e apresentará as possibilidades de tratamento.",
  },
];

const questions = [
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode entrar em contato pelo WhatsApp ou preencher o formulário desta página. Nossa equipe irá orientar sobre os horários disponíveis.",
  },
  {
    question: "Quais tratamentos a clínica oferece?",
    answer:
      "Oferecemos diferentes modalidades de atendimento odontológico. Consulte a seção de tratamentos ou entre em contato para conhecer os serviços disponíveis.",
  },
  {
    question: "Preciso passar por uma avaliação antes do tratamento?",
    answer:
      "Sim. A avaliação permite que o profissional conheça suas necessidades e indique as possibilidades de tratamento adequadas ao seu caso.",
  },
  {
    question: "Como posso saber os valores dos tratamentos?",
    answer:
      "Os valores dependem da avaliação e do planejamento individual. Entre em contato com nossa equipe para receber orientações.",
  },
  {
    question: "Onde a clínica está localizada?",
    answer:
      `Estamos localizados em ${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}.`,
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Início", "#inicio"],
    ["Tratamentos", "#tratamentos"],
    ["A clínica", "#sobre"],
    ["Diferenciais", "#diferenciais"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="brand">
          <span className="brand-icon">
            <Smile size={25} />
          </span>

          <span>
            <strong>{siteConfig.name}</strong>
            <small>ODONTOLOGIA</small>
          </span>
        </a>

        <nav className={`navigation ${open ? "navigation-open" : ""}`}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Agendar avaliação
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Alternar menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} />
            CUIDADO E ATENÇÃO EM CADA DETALHE
          </span>

          <h1>
            Cuidar do seu sorriso é cuidar de você.
          </h1>

          <p>
            Na {siteConfig.name}, você encontra atendimento
            odontológico com atenção individualizada,
            cuidado e compromisso com sua saúde bucal.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
              data-track="whatsapp"
              data-location="hero"
            >
              <MessageCircle size={19} />
              Agendar pelo WhatsApp
            </a>

            <a href="#tratamentos" className="button-outline">
              Conheça nossos tratamentos
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <ShieldCheck size={20} />
              <span>Profissionais habilitados</span>
            </div>

            <div>
              <Heart size={20} />
              <span>Atendimento humanizado</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
            alt="Ambiente moderno de uma clínica odontológica"
            fetchPriority="high"
          />

          <div className="hero-floating-card">
            <span className="floating-icon">
              <CalendarDays size={22} />
            </span>

            <div>
              <strong>Agende sua avaliação</strong>
              <span>Entre em contato com nossa equipe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>ODONTOLOGIA COM CUIDADO E ATENÇÃO</span>
        <span>SEU SORRISO, NOSSA PRIORIDADE</span>
      </div>
    </section>
  );
}

function Treatments() {
  return (
    <section className="section treatments" id="tratamentos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">NOSSOS SERVIÇOS</span>

          <h2>
            Cuidado odontológico para
            <span> diferentes necessidades.</span>
          </h2>

          <p>
            Conheça algumas das modalidades de atendimento
            disponíveis em nossa clínica.
          </p>
        </div>

        <div className="treatments-grid">
          {treatments.map((item) => {
            const Icon = item.icon;

            return (
              <article className="treatment-card" key={item.title}>
                <div className="treatment-icon">
                  <Icon size={28} strokeWidth={1.6} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a
                  href={whatsappLink(
                    `Olá! Gostaria de informações sobre ${item.title}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  data-track="whatsapp"
                  data-location={`treatment-${item.title}`}
                >
                  Saiba mais
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85"
            alt="Profissional realizando atendimento odontológico"
            loading="lazy"
          />

          <div className="about-badge">
            <ShieldCheck size={23} />
            <span>Cuidado em cada etapa</span>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">CONHEÇA NOSSA CLÍNICA</span>

          <h2>
            Seu cuidado começa
            <span> com uma boa conversa.</span>
          </h2>

          <p>
            Acreditamos que cada pessoa merece ser atendida
            com atenção, respeito e transparência.
          </p>

          <p>
            Nossa proposta é oferecer um ambiente acolhedor,
            profissionais habilitados e orientação clara
            sobre cada etapa do atendimento odontológico.
          </p>

          <div className="about-list">
            <div>
              <CheckCircle2 size={19} />
              Atendimento individualizado
            </div>

            <div>
              <CheckCircle2 size={19} />
              Orientações claras sobre os tratamentos
            </div>

            <div>
              <CheckCircle2 size={19} />
              Compromisso com a saúde bucal
            </div>
          </div>

          <div className="professional-info">
            <strong>Responsável técnico:</strong>
            <span>Nome do profissional — {siteConfig.cro}</span>
          </div>

          <a href="#contato" className="button-primary">
            Conheça nossa estrutura
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="section differentials" id="diferenciais">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">NOSSO COMPROMISSO</span>

          <h2>
            Uma experiência de cuidado
            <span> em todos os detalhes.</span>
          </h2>

          <p>
            Mais do que realizar tratamentos, queremos
            proporcionar um atendimento acolhedor e transparente.
          </p>
        </div>

        <div className="differentials-grid">
          {differentials.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="differential-card">
                <Icon size={31} strokeWidth={1.5} />

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section steps" id="como-funciona">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">É SIMPLES COMEÇAR</span>

          <h2>
            Seu atendimento em
            <span> poucos passos.</span>
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>

                <div className="step-icon">
                  <Icon size={27} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">DÚVIDAS FREQUENTES</span>

          <h2>
            Podemos ajudar
            <span> com suas dúvidas?</span>
          </h2>

          <p>
            Reunimos algumas informações para facilitar
            seu primeiro contato com nossa clínica.
          </p>

          <a
            href={whatsappLink("Olá! Tenho algumas dúvidas sobre os atendimentos.")}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            <MessageCircle size={18} />
            Fale conosco
          </a>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article
              className={`faq-item ${active === index ? "faq-active" : ""}`}
              key={item.question}
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                aria-expanded={active === index}
              >
                {item.question}
                <ChevronDown size={19} />
              </button>

              {active === index && (
                <p>{item.answer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
  });

  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("Preencha seu nome e telefone.");
      return;
    }

    if (!siteConfig.formEndpoint) {
      const message =
        `Olá! Gostaria de solicitar um agendamento.\n\n` +
        `Nome: ${form.name}\n` +
        `Telefone: ${form.phone}\n` +
        `Assunto: ${form.subject || "Avaliação odontológica"}`;

      window.open(whatsappLink(message), "_blank");

      setStatus("Você será direcionado ao WhatsApp para concluir o contato.");
      return;
    }

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar");
      }

      window.dataLayer?.push({
        event: "form_submit",
      });

      setStatus("Solicitação enviada com sucesso!");
      setForm({ name: "", phone: "", subject: "" });
    } catch {
      setStatus("Não foi possível enviar. Tente novamente pelo WhatsApp.");
    }
  }

  return (
    <section className="section contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">FALE COM NOSSA EQUIPE</span>

          <h2>
            Vamos conversar
            <span> sobre seu atendimento?</span>
          </h2>

          <p>
            Entre em contato para conhecer os serviços,
            tirar dúvidas e consultar os horários disponíveis.
          </p>

          <div className="contact-detail">
            <MessageCircle />
            <div>
              <strong>WhatsApp</strong>
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Conversar com nossa equipe
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <Phone />
            <div>
              <strong>Telefone</strong>
              <a href={`tel:+${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin />
            <div>
              <strong>Endereço</strong>
              <span>
                {siteConfig.address.street},
                {" "}{siteConfig.address.neighborhood},
                {" "}{siteConfig.address.city} - {siteConfig.address.state}
              </span>
            </div>
          </div>

          <div className="contact-detail">
            <Clock />
            <div>
              <strong>Horário de atendimento</strong>
              <span>Consulte nossa equipe.</span>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Solicite um contato</h3>

          <p>Preencha os dados abaixo para iniciar seu atendimento.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <label htmlFor="phone">Telefone / WhatsApp</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <label htmlFor="subject">Assunto</label>

            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
            >
              <option value="">Selecione uma opção</option>
              {treatments.map((item) => (
                <option key={item.title} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>

            <button type="submit" className="button-primary form-button">
              Solicitar atendimento
              <ArrowRight size={18} />
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}

            <small>
              Ao enviar, você concorda com o tratamento dos
              dados fornecidos para que a clínica possa
              responder à sua solicitação. Consulte nossa
              Política de Privacidade.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-icon">
              <Smile size={25} />
            </span>

            <span>
              <strong>{siteConfig.name}</strong>
              <small>ODONTOLOGIA</small>
            </span>
          </a>

          <p>
            Cuidado odontológico com atenção,
            responsabilidade e respeito a cada paciente.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#sobre">A clínica</a>
          <a href="#contato">Contato</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`tel:+${siteConfig.phone}`}>Telefone</a>
          <a href="#contato">Localização</a>
        </div>

        <div>
          <h4>Redes sociais</h4>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
            {/* <Instagram size={16} />  */}
            Instagram
          </a>
          <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
            {/* <Facebook size={16} />  */}
            Facebook
          </a>
        </div>
      </div>

      {siteConfig.mapsEmbed && (
        <div className="container footer-map">
          <iframe
            src={siteConfig.mapsEmbed}
            title="Localização da clínica"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}.
            Todos os direitos reservados.
          </p>

          <p>Responsável técnico: {siteConfig.cro}</p>

          <a href="/politica-de-privacidade">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Agendar pelo WhatsApp"
      data-track="whatsapp"
      data-location="floating"
    >
      <MessageCircle size={26} />
    </a>
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem("clinic-cookie-consent") === null
  );

  function saveConsent(value) {
    localStorage.setItem("clinic-cookie-consent", value);
    window.dispatchEvent(new CustomEvent("clinic-consent-change"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div>
        <strong>Privacidade e cookies</strong>
        <p>
          Utilizamos cookies necessários para o funcionamento
          do site. Com sua autorização, também poderemos utilizar
          tecnologias de análise e publicidade para entender
          como os visitantes interagem com a página.
          Consulte nossa Política de Privacidade.
        </p>
      </div>

      <div className="cookie-actions">
        <button onClick={() => saveConsent("rejected")}>
          Apenas necessários
        </button>

        <button onClick={() => saveConsent("accepted")}>
          Aceitar todos
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Treatments />
        <About />
        <Differentials />
        <Steps />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}