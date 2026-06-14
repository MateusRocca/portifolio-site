import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/unenv.mjs";



import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";





const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="pt-br">\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>meu-projeto</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/main.jsx"><\/script>\n  </body>\n</html>\n', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
