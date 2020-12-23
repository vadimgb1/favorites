const fs = require('fs')
const csv = require('csv-parser')
const fStream = fs.createReadStream('favourites.csv')
const csvStream = csv ()
csvStream.on('data', data =>
{
    console.log(data['название'])
})

fStream.pipe(csvStream)