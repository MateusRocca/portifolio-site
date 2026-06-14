import process from "node:process";
import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-DZgUdZy7.mjs";
import { R as Resend } from "../_libs/resend.mjs";

import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/postal-mime.mjs";
import "../_libs/standardwebhooks.mjs";
import "../_libs/stablelib__base64.mjs";
import "../_libs/fast-sha256.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const resend = new Resend(process.env.RESEND_API_KEY);
const contactSchema = objectType({
  name: stringType().trim().min(2),
  email: stringType().email(),
  company: stringType().optional(),
  subject: stringType().trim().min(2),
  message: stringType().trim().min(10)
});
const sendEmail_createServerFn_handler = createServerRpc({
  id: "8a81c8cf5b42026ee0eedaaec5fe44e869252b0a92af1aea2a8bf8b4f7faf35e",
  name: "sendEmail",
  filename: "src/lib/send-email.ts"
}, (opts) => sendEmail.__executeServer(opts));
const sendEmail = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(sendEmail_createServerFn_handler, async ({
  data
}) => {
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
      `
  });
  return {
    success: true
  };
});
export {
  sendEmail_createServerFn_handler
};
