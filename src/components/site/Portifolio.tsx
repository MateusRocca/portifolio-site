import { ExternalLink, Eye } from "lucide-react";
'import sales from "@/assets/project-sales.jpg";'
'import finance from "@/assets/project-finance.jpg";'
'import hr from "@/assets/project-hr.jpg";'
'import logistics from "@/assets/project-logistics.jpg";'

const projects = [
  {
    img: "sales",
    title: "Sales Performance Hub",
    desc: "Dashboard executivo com análise de vendas multi-canal e previsões.",
    tech: ["Power BI", "DAX", "SQL", "Azure"],
    kpis: ["Receita", "Ticket Médio", "Conversão", "Forecast"],
  },
  {
    img: "finance",
    title: "Financial Intelligence",
    desc: "Centro de inteligência financeira com fluxo de caixa e DRE dinâmica.",
    tech: ["Power BI", "Power Query", "Excel", "SharePoint"],
    kpis: ["EBITDA", "Margem", "OPEX", "Cash Flow"],
  },
  {
    img: "hr",
    title: "People Analytics",
    desc: "Indicadores de RH com headcount, turnover e clima organizacional.",
    tech: ["Power BI", "Python", "SQL"],
    kpis: ["Turnover", "Headcount", "Absenteísmo", "eNPS"],
  },
  {
    img: "logistics",
    title: "Supply Chain Control Tower",
    desc: "Visão 360° da cadeia logística com SLA, rotas e custo por entrega.",
    tech: ["Power BI", "Databricks", "ETL"],
    kpis: ["OTIF", "Lead Time", "Custo/KM", "Estoque"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Portfólio
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-mint md:text-5xl">
            Projetos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção de dashboards e soluções que entreguei valor mensurável.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="glass hover-lift reveal group relative overflow-hidden rounded-3xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-mint">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-mint"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Principais KPIs
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.kpis.map((k) => (
                      <span key={k} className="text-xs text-mint/80">• {k}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition hover:shadow-glow">
                    <Eye size={14} /> Detalhes
                  </button>
                  <button className="glass inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-mint transition hover:bg-muted">
                    <ExternalLink size={14} /> Demonstração
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
