const items = [
  {
    company: "Xperiun",
    role: "Profissional em Análise de Dados, Automações e IA",
    period: "2026 - Presente",
    activities: [
      "Formação com foco na construção de soluções orientadas a dados, eficiência operacional e suporte à tomada de decisão estratégica. Abrange práticas de coleta, tratamento e modelagem de dados, criação de dashboards analíticos, automação de processos e aplicação de conceitos de IA para otimização de fluxos e geração de insights. A formação também desenvolve uma visão de negócio aplicada, permitindo a tradução de dados em indicadores relevantes, identificação de oportunidades de melhoria e apoio direto à tomada de decisão baseada em valor e impacto operacional.",
    ],
    results: ["Economia anual de R$ 1.2M", "ROI de 320% em 12 meses"],
  },
  {
    company: "Unicesumar",
    role: "Analise e Desenvolvimento de Sistemas",
    period: "2023 — 2025",
    activities: [
      "Graduação com base sólida em lógica de programação, estruturação e modelagem de dados, bancos de dados relacionais e engenharia de software. O curso desenvolve uma visão prática de construção de sistemas, integração de tecnologias e resolução de problemas computacionais, permitindo adaptação para áreas como automação, desenvolvimento de software e análise de dados.",
    ],
    results: [""],
  }
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">

        {/* HEADER */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Formação Acadêmica
          </div>

          <h2 className="mt-3 font-display text-4xl font-bold text-mint md:text-5xl">
            Uma jornada de <span className="text-gradient">aprendizado e evolução</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 pl-6 md:pl-0">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {items.map((it, i) => {
              const left = i % 2 === 0;

              return (
                <div
                  key={it.company}
                  className="reveal relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* PONTO DA LINHA DO TEMPO */}
                  <div className="absolute -left-[2px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                  {/* CONTEÚDO */}
                  <div
                    className={`pl-6 md:pl-0 ${
                      left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <div className="glass hover-lift inline-block w-full rounded-2xl p-6 text-left">
                      
                      <div className="text-xs uppercase tracking-widest text-primary">
                        {it.period}
                      </div>

                      <h3 className="mt-1 font-display text-xl font-bold text-mint">
                        {it.role}
                      </h3>

                      <div className="text-sm text-muted-foreground">
                        {it.company}
                      </div>

                      <ul className="mt-4 space-y-1.5 text-sm text-mint/85">
                        {it.activities.map((a) => (
                          <li key={a} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {a}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOWNLOAD CV */}
        <div className="mt-16 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          
          <a
            href="/Mateus-Rocca-BR.pdf"
            download
            className="rounded-xl border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-black transition"
          >
            🇧🇷 Baixar Currículo
          </a>

          <a
            href="/Mateus-Rocca-EN.pdf"
            download
            className="rounded-xl border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-black transition"
          >
            🇺🇸 Download Resume
          </a>

        </div>

      </div>
    </section>
  );
} 