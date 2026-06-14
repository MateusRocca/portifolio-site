import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!doctype html>\n<html lang="pt-br">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Mateus Rocca</title>\n  </head>\n  <body>\n  </body>\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
