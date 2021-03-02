export default function document(state={}) {
  let {children, title } = state
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
 <body>
  ${children}
 </body>

</html>
`
}