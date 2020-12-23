const fs = require('fs')
const csv = require('csv-parser')

const names = {}

const csvStream = csv()
const fStream = fs.createReadStream('favorites.csv')
csvStream.on('data',data=>
{
    const name = data['название'].toLowerCase()
    if(names[name])
    name[names] += 1
    else
    names[name] = 1
})

csvStream.on('end',() =>
{
    console.table(names)
})
fStream.pipe(csvStream)