import React from "https://jspm.dev/react@16.13.1";
import ReactDOMServer from "https://jspm.dev/react-dom@16.13.1/server";
import { App } from "./components/app.jsx";

// omg ssr
export default async function render(req) {
  let body = ReactDOMServer.renderToString(<App />);
  return `<!DOCTYPE html>
    <html>
    <body>
    <main>${body}</main>
    </body>
    </html>
  `;
}