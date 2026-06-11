import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import profile from "@/assets/mateus.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0">
        <Particles />
      </div>
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        {/* Photo first on mobile via order */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary via-secondary to-mint opacity-30 blur-2xl animate-pulse-glow" />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 neon-border">
              <img
                src={profile}
                alt="Foto do especialista em Power BI"
                width={520}
                height={520}
                className="h-72 w-72 rounded-[1.6rem] object-cover sm:h-96 sm:w-96 md:h-[26rem] md:w-[26rem]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-transparent to-mint/10" />
            </div>
            
            {/*<div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-glow animate-float">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Projetos</div>
              <div className="font-display text-2xl font-bold text-mint neon-text">80+</div>
            </div>*/}
            {/*<div className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-glow animate-float [animation-delay:1.5s]">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Power BI</div>
              <div className="font-display text-2xl font-bold text-mint neon-text">7 anos</div>
            </div>*/}
          </div>
        </div>

        <div className="order-2 md:order-1 animate-slide-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-mint">
            <Sparkles size={14} className="text-primary" />
            Disponível para novos projetos
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-mint sm:text-5xl md:text-6xl">
            Mateus Rocca
            <span className="block text-gradient">Transformando dados em decisão.</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-primary">
            Especialista em Power BI, Dados e Business Intelligence
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Construo dashboards inteligentes, pipelines de dados robustos e soluções de
            analytics que aceleram resultados — combinando design, engenharia e estratégia.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:shadow-[0_0_50px_rgba(64,138,113,0.8)]"
            >
              Ver Portfólio
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-mint transition hover:bg-muted neon-border"
            >
              Entrar em Contato
            </a>
          </div>

          {/*<div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { k: "+50", v: "Dashboards" },
              { k: "+30", v: "Clientes" },
              { k: "99%", v: "Satisfação" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl px-3 py-3 text-center hover-lift">
                <div className="font-display text-xl font-bold text-mint neon-text">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>*/}
        </div>
      </div>
    </section>
  );
}
