import document from "./components/document.js";
import Main from "./components/main.js"

export async function handler(req /*object*/) {
  return {
    headers: {
      "content-type": "text/html; charset=utf8",
    },
    statusCode: 200,
    body: document({body:Main()}),
  };
}
