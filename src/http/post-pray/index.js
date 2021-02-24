const arc = require('@architect/functions')
const data = require('@begin/data')

async function route(req) {
  console.log(req.body.prayer)

  let save = await data.set({
    table: 'prayers',
    item: req.body.prayer
  })

  console.log(save)

  return {
    location: `/?success=${req.body.prayer}`
  }
}

exports.handler = arc.http.async(route)