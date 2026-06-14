import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DZgUdZy7.mjs";

import "../_libs/seroval.mjs";
import { X, M as Menu, S as Sparkles, A as ArrowRight, C as ChartColumn, W as Workflow, D as Database, a as CodeXml, L as Layers, B as Bot, F as FileSpreadsheet, G as GitBranch, Z as Zap, b as Wrench, c as Send, d as Linkedin, e as Github, f as Mail, g as MessageCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";

import "../_libs/react-dom.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/isbot.mjs";
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong neon-border" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 font-display font-bold tracking-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow", children: "BI" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-mint", children: [
                  "Rocca",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." }),
                  "Data"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-mint",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contato",
                  className: "hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:shadow-[0_0_40px_rgba(64,138,113,0.7)] md:inline-block",
                  children: "Vamos conversar"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "aria-label": "Menu",
                  className: "rounded-lg p-2 text-mint md:hidden",
                  onClick: () => setOpen((v) => !v),
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong mt-2 rounded-2xl p-3 md:hidden animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "block rounded-lg px-3 py-2 text-mint hover:bg-muted",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contato",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground",
              children: "Vamos conversar"
            }
          )
        ] }) })
      ] })
    }
  );
}
function Particles() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points = [];
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      const n = Math.floor(w * h / 18e3);
      points = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.6 + 0.2
      }));
    };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(176, 228, 204, ${p.a})`;
        ctx.shadowColor = "rgba(64, 138, 113, 0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx.strokeStyle = `rgba(64, 138, 113, ${(1 - d2 / 14400) * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref, className: "absolute inset-0 h-full w-full", "aria-hidden": "true" });
}
const profile = "/assets/mateus-CYE6sxso.png";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 md:order-2 flex justify-center md:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary via-secondary to-mint opacity-30 blur-2xl animate-pulse-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong relative overflow-hidden rounded-[2rem] p-2 neon-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: profile,
              alt: "Foto do especialista em Power BI",
              width: 520,
              height: 520,
              className: "h-72 w-72 rounded-[1.6rem] object-cover sm:h-96 sm:w-96 md:h-[26rem] md:w-[26rem]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-transparent to-mint/10" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 md:order-1 animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-mint", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-primary" }),
          "Disponível para novos projetos"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-4xl font-extrabold leading-[1.05] text-mint sm:text-5xl md:text-6xl", children: [
          "Mateus Rocca",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient", children: "Transformando dados em decisão." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg font-medium text-primary", children: "Especialista em Power BI, Dados e Business Intelligence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground", children: "Construo dashboards inteligentes, pipelines de dados robustos e soluções de analytics que aceleram resultados — combinando design, engenharia e estratégia." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#portfolio",
              className: "group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:shadow-[0_0_50px_rgba(64,138,113,0.8)]",
              children: [
                "Ver Portfólio",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "transition group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contato",
              className: "glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-mint transition hover:bg-muted neon-border",
              children: "Entrar em Contato"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const skills = [
  { icon: ChartColumn, name: "Power BI" },
  { icon: Sparkles, name: "DAX" },
  { icon: Workflow, name: "Power Query" },
  { icon: Database, name: "SQL" },
  { icon: CodeXml, name: "Python" },
  { icon: Layers, name: "Power Apps" },
  { icon: Bot, name: "Power Automate" },
  { icon: FileSpreadsheet, name: "SharePoint" },
  { icon: GitBranch, name: "Engenharia de Dados" },
  { icon: Zap, name: "ETL" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Sobre Mim" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold leading-tight text-mint md:text-5xl", children: [
        "Dados com ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "propósito" }),
        " e clareza estratégica."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Graduado em Análise e Desenvolvimento de Sistemas, especialista em Business Intelligence e soluções Microsoft, dedicado a transformar dados em insights estratégicos que impulsionam a tomada de decisão e a eficiência dos negócios. Desenvolvo dashboards, análises avançadas, automações e aplicações corporativas por meio do Power BI e do ecossistema Microsoft Power Platform, conectando dados, processos e pessoas para gerar resultados mensuráveis e valor para as organizações." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "Minha experiência é construída por meio de projetos que unem dados, tecnologia e negócio. Atuei no desenvolvimento de dashboards executivos, soluções analíticas, automações de processos e aplicações corporativas, aplicando as melhores práticas de Business Intelligence para transformar informações em resultados concretos, com foco em performance, governança e geração de valor para as organizações." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass hover-lift group reveal rounded-2xl p-4",
        style: { transitionDelay: `${i * 40}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold text-mint", children: s.name })
        ]
      },
      s.name
    )) })
  ] }) }) });
}
const items = [
  {
    company: "Xperiun",
    role: "Profissional em Análise de Dados, Automações e IA",
    period: "2026 - Presente",
    activities: [
      "Formação com foco na construção de soluções orientadas a dados, eficiência operacional e suporte à tomada de decisão estratégica. Abrange práticas de coleta, tratamento e modelagem de dados, criação de dashboards analíticos, automação de processos e aplicação de conceitos de IA para otimização de fluxos e geração de insights. A formação também desenvolve uma visão de negócio aplicada, permitindo a tradução de dados em indicadores relevantes, identificação de oportunidades de melhoria e apoio direto à tomada de decisão baseada em valor e impacto operacional."
    ],
    results: ["Economia anual de R$ 1.2M", "ROI de 320% em 12 meses"]
  },
  {
    company: "Unicesumar",
    role: "Analise e Desenvolvimento de Sistemas",
    period: "2022 — 2025",
    activities: [
      "Graduação com base sólida em lógica de programação, estruturação e modelagem de dados, bancos de dados relacionais e engenharia de software. O curso desenvolve uma visão prática de construção de sistemas, integração de tecnologias e resolução de problemas computacionais, permitindo adaptação para áreas como automação, desenvolvimento de software e análise de dados."
    ],
    results: [""]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experiencia", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Formação Acadêmica" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold text-mint md:text-5xl", children: [
        "Uma jornada de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "aprendizado e evolução" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 pl-6 md:pl-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: items.map((it, i) => {
        const left = i % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "reveal relative md:grid md:grid-cols-2 md:gap-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[2px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background md:left-1/2 md:-translate-x-1/2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `pl-6 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass hover-lift inline-block w-full rounded-2xl p-6 text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: it.period }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-xl font-bold text-mint", children: it.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.company }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5 text-sm text-mint/85", children: it.activities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }),
                      a
                    ] }, a)) })
                  ] })
                }
              )
            ]
          },
          it.company
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col items-center gap-3 md:flex-row md:justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/Mateus-Rocca-BR.pdf",
          download: true,
          className: "rounded-xl border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-black transition",
          children: "🇧🇷 Baixar Currículo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/Mateus-Rocca-EN.pdf",
          download: true,
          className: "rounded-xl border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-black transition",
          children: "🇺🇸 Download Resume"
        }
      )
    ] })
  ] }) });
}
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "portfolio", className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-[300px] flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 56, className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl font-bold text-mint", children: "Em construção" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Esta seção está sendo preparada. Em breve você poderá visualizar meus projetos e soluções desenvolvidas." })
    ] }) })
  ] });
}
const techs = [
  "Power BI",
  "SQL",
  "Python",
  "Power Apps",
  "Power Automate",
  "SharePoint",
  "Excel",
  "Azure",
  "Databricks",
  "IA Aplicada a Negócios"
];
function TechStack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tecnologias", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold text-mint md:text-5xl", children: [
        "Tecnologias que ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "domino" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5", children: techs.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass hover-lift reveal group relative overflow-hidden rounded-2xl p-6 text-center",
        style: { transitionDelay: `${i * 50}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-14 w-14 place-items-center rounded-xl bg-primary/15 font-display text-xl font-bold text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow", children: t.charAt(0) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-semibold text-mint", children: t })
        ]
      },
      t
    )) })
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().trim().min(2),
  email: stringType().email(),
  company: stringType().optional(),
  subject: stringType().trim().min(2),
  message: stringType().trim().min(10)
});
const sendEmail = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("8a81c8cf5b42026ee0eedaaec5fe44e869252b0a92af1aea2a8bf8b4f7faf35e"));
const schema = objectType({
  name: stringType().trim().min(2, "Informe seu nome").max(100),
  email: stringType().trim().email("E-mail inválido").max(255),
  company: stringType().trim().max(120).optional().or(literalType("")),
  subject: stringType().trim().min(2, "Informe um assunto").max(150),
  message: stringType().trim().min(10, "Mensagem muito curta").max(1e3)
});
const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mateusrocca/" },
  { icon: Github, label: "GitHub", href: "https://github.com/MateusRocca" },
  { icon: Mail, label: "E-mail", href: "mailto:galdinorocca@outlook.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5535997366585" }
];
function Contact() {
  const [errors, setErrors] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const map = {};
      res.error.issues.forEach((i) => {
        map[i.path[0]] = i.message;
      });
      setErrors(map);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await sendEmail({
        data: res.data
      });
      toast.success(
        "Mensagem enviada! Retornarei em breve."
      );
      e.target.reset();
    } catch {
      toast.error(
        "Erro ao enviar mensagem."
      );
    } finally {
      setLoading(false);
    }
  };
  const field = "w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-mint placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:bg-muted focus:shadow-glow";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.3em] text-primary", children: "Contato" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold text-mint md:text-5xl", children: [
        "Vamos transformar seus ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "dados" }),
        " juntos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Conte sobre seu projeto. Responderei em até 24h." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "glass-strong reveal rounded-3xl p-6 md:p-8", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-mint", children: "Nome" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", className: field + " mt-1", placeholder: "Seu nome" }),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-mint", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "email", type: "email", className: field + " mt-1", placeholder: "voce@empresa.com" }),
            errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-mint", children: "Empresa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "company", className: field + " mt-1", placeholder: "Opcional" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-mint", children: "Assunto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "subject", className: field + " mt-1", placeholder: "Projeto de Power BI" }),
            errors.subject && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.subject })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-mint", children: "Mensagem" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, className: field + " mt-1 resize-none", placeholder: "Conte um pouco sobre seu desafio..." }),
          errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:shadow-[0_0_50px_rgba(64,138,113,0.8)] disabled:opacity-60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
              " ",
              loading ? "Enviando..." : "Enviar mensagem"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass reveal rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-mint", children: "Conecte-se" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Disponível para projetos freelance, consultoria e oportunidades." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 gap-3", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: s.href,
              target: "_blank",
              rel: "noreferrer",
              className: "glass hover-lift group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-mint",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 16 }) }),
                s.label
              ]
            },
            s.label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass reveal rounded-3xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Localização" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg font-bold text-mint", children: "Brasil • Remoto global" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm text-muted-foreground", children: "Resposta em até 24h em dias úteis." })
        ] })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Mateus Rocca • Especialista em BI & Dados"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary shadow-glow" }),
      "Construído com dados, design e cafeína."
    ] })
  ] }) });
}
function useReveal() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechStack, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "top-right", richColors: true })
  ] });
}
export {
  Index as component
};
