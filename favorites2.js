const fs = require('fs')
const csv = require('csv-parser')
let names = {}

const fStream = fs.createReadStream('favorites.csv')
const csvStream = csv()

csvStream.on('data', data =>
{
    const name = data['название'].toLowerCase(). trim()
    if (names[name])
      names [name] += 1
    else
      names [name] =1
})

csvStream.on('end', () =>
{
  let namesKeys = Object.keys(names).sort((a, b) => names[a] - names[b]).reverse()

  for (let name of namesKeys)
      console.log(`${name}: ${names[name]}`)
})

fStream.pipe(csvStream)