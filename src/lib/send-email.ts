export async function sendEmail({ data }: {
  data: {
    name: string;
    email: string;
    company?: string;
    subject: string;
    message: string;
  }
}) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erro ao enviar");
  return res.json();
}