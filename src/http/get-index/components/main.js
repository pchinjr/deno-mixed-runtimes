export default function Main(state={}) {

  let time = new Date().toLocaleTimeString()

  return `
<div>
  <h1>Todeno</h1>
  <p>praise cage</p>
  <p>${time}<p>
  <form action='/todos' method="POST">
  <input>
  </form>
</div>
`
}