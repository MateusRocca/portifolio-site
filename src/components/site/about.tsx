import { Database, BarChart3, Workflow, Code2, FileSpreadsheet, Zap, Layers, GitBranch, Bot, Sparkles } from "lucide-react";

const skills = [
  { icon: BarChart3, name: "Power BI" },
  { icon: Sparkles, name: "DAX" },
  { icon: Workflow, name: "Power Query" },
  { icon: Database, name: "SQL" },
  { icon: Code2, name: "Python" },
  { icon: Layers, name: "Power Apps" },
  { icon: Bot, name: "Power Automate" },
  { icon: FileSpreadsheet, name: "SharePoint" },
  { icon: GitBranch, name: "Engenharia de Dados" },
  { icon: Zap, name: "ETL" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Sobre Mim
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-mint md:text-5xl">
              Dados com <span className="text-gradient">propósito</span> e
              clareza estratégica.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Graduado em Análise e Desenvolvimento de Sistemas, especialista em Business Intelligence e soluções Microsoft, 
              dedicado a transformar dados em insights estratégicos que impulsionam a tomada de decisão 
              e a eficiência dos negócios. 
              Desenvolvo dashboards, análises avançadas, 
              automações e aplicações corporativas por meio do Power BI e do ecossistema Microsoft Power Platform, 
              conectando dados, processos e pessoas para gerar resultados mensuráveis e valor para as organizações.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Minha experiência é construída por meio de projetos que unem dados, tecnologia e negócio. 
              Atuei no desenvolvimento de dashboards executivos, soluções analíticas, 
              automações de processos e aplicações corporativas, aplicando as melhores práticas de 
              Business Intelligence para transformar informações em resultados concretos, 
              com foco em performance, governança e geração de valor para as organizações.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skills.map((s, i) => (
              <div
                key={s.name}
                className="glass hover-lift group reveal rounded-2xl p-4"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  <s.icon size={20} />
                </div>
                <div className="mt-3 text-sm font-semibold text-mint">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
