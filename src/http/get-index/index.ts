import render from "./render.jsx";

export async function handler(req: object) {
  console.log(req)
  return {
    headers: {
      "content-type": "text/html; charset=utf8",
    },
    statusCode: 200,
    body: await render(req),
  };
}
