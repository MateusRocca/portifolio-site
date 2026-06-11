import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/send-email";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Informe um assunto").max(150),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mateusrocca/" },
  { icon: Github, label: "GitHub", href: "https://github.com/MateusRocca" },
  { icon: Mail, label: "E-mail", href: "mailto:galdinorocca@outlook.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/5535997366585" },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const map: Record<string, string> = {};
      res.error.issues.forEach((i) => { map[i.path[0] as string] = i.message; });
      setErrors(map);
      return;
    }
    setErrors({});
    setLoading(true);
    try {

      await sendEmail({
      data: res.data,
    });

  toast.success(
    "Mensagem enviada! Retornarei em breve."
  );

  (e.target as HTMLFormElement).reset();

  } catch {

    toast.error(
      "Erro ao enviar mensagem."
    );

  }
  finally {
    setLoading(false);
  }
  };

  const field = "w-full rounded-xl bg-muted/40 border border-border px-4 py-3 text-mint placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:bg-muted focus:shadow-glow";

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
          <p className="mt-4 text-muted-foreground">
            Conte sobre seu projeto. Responderei em até 24h.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="glass-strong reveal rounded-3xl p-6 md:p-8" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-mint">Nome</label>
                <input name="name" className={field + " mt-1"} placeholder="Seu nome" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-medium text-mint">E-mail</label>
                <input name="email" type="email" className={field + " mt-1"} placeholder="voce@empresa.com" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs font-medium text-mint">Empresa</label>
                <input name="company" className={field + " mt-1"} placeholder="Opcional" />
              </div>
              <div>
                <label className="text-xs font-medium text-mint">Assunto</label>
                <input name="subject" className={field + " mt-1"} placeholder="Projeto de Power BI" />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-mint">Mensagem</label>
              <textarea name="message" rows={5} className={field + " mt-1 resize-none"} placeholder="Conte um pouco sobre seu desafio..." />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:shadow-[0_0_50px_rgba(64,138,113,0.8)] disabled:opacity-60"
            >
              <Send size={16} /> {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          <div className="space-y-4">
            <div className="glass reveal rounded-3xl p-6">
              <h3 className="font-display text-lg font-bold text-mint">Conecte-se</h3>
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
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Localização</div>
              <div className="mt-1 font-display text-lg font-bold text-mint">Brasil • Remoto global</div>
              <div className="mt-3 text-sm text-muted-foreground">Resposta em até 24h em dias úteis.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
