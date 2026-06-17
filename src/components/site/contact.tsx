import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateusrocca/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MateusRocca",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "mailto:galdinorocca@outlook.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5535997366585",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Contato
          </div>

          <h2 className="mt-3 font-display text-4xl font-bold text-mint md:text-5xl">
            Vamos transformar seus <span className="text-gradient">dados</span> juntos
          </h2>
        </div>

        <div className="mt-14 flex justify-center">
          <div className="space-y-4">
            <div className="glass reveal rounded-3xl p-6">
              <h3 className="font-display text-lg font-bold text-mint">
                Conecte-se
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Disponível para projetos freelance, consultoria e oportunidades.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass hover-lift group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-mint"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                      <s.icon size={16} />
                    </span>

                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass reveal rounded-3xl p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Localização
              </div>

              <div className="mt-1 font-display text-lg font-bold text-mint">
                Brasil • Remoto global
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                Resposta em até 24h em dias úteis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
