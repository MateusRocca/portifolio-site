import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, company, subject, message } = req.body;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "galdinorocca@outlook.com",
    subject: `Portfólio | ${subject}`,
    html: `<h2>Novo contato</h2><p><b>Nome:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Empresa:</b> ${company ?? "Não informado"}</p><hr/><p>${message}</p>`,
  });
  res.status(200).json({ success: true });
}