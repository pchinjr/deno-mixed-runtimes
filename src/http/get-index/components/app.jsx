import React from "https://jspm.dev/react@16.13.1";

export function App() {
  return <Protected />
}

function Protected() {
  return <div>
    <h1>hello</h1>
    <p>Behold the protec ssr. <a href="/logout">Logout</a></p>
  </div>;
}