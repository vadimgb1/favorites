const fs = require('fs')
const csv = require ('csv-parser')
const fStream = fs.createReadStream ('favorites.csv')
const csvStream = csv ()
csvStream.on('data', data =>
{
    console.log(data['название'])
})

csvStream.on('end', () => console.log('It is the end'))

fStream.pipe(csvStream)