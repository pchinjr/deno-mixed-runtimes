export default function Main(state={}) {
  let { name } = state
  let time = new Date().toLocaleTimeString()

  return `
<div>
  <h1>Praise ${name}</h1>
  <p>${time}<p>
  <form action='/pray' method="POST">
  <input type="text" name="prayer">
  <button>Submit</button>
  </form>
</div>
`
}