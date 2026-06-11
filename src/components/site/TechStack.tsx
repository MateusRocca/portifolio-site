const techs = [
  "Power BI", "SQL", "Python", "Power Apps",
  "Power Automate", "SharePoint", "Excel", "Azure", "Databricks", "IA Aplicada a Negócios",
];

export function TechStack() {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Stack
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold text-mint md:text-5xl">
            Tecnologias que <span className="text-gradient">domino</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {techs.map((t, i) => (
            <div
              key={t}
              className="glass hover-lift reveal group relative overflow-hidden rounded-2xl p-6 text-center"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-primary/15 font-display text-xl font-bold text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                {t.charAt(0)}
              </div>
              <div className="mt-4 text-sm font-semibold text-mint">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
