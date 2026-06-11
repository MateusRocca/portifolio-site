import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.string().trim().min(2),
  message: z.string().trim().min(10),
});

export const sendEmail = createServerFn({
  method: "POST",
})
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "galdinorocca@outlook.com",

      subject: `Portfólio | ${data.subject}`,

      html: `
        <h2>Novo contato do portfólio</h2>

        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company ?? "Não informado"}</p>

        <hr/>

        <p>${data.message}</p>
      `,
    });

    return {
      success: true,
    };
  });