export default function document(state={}) {
  let {body} = state
  return `
<!DOCTYPE html>
<html>
 <body>
  ${body}
 </body>
</html>
`
}