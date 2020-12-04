const fs = require('fs')
const csv = require('csv-parser')
const csvStream = csv()
const fStream = fs.createReadStream('favorites.csvтщву ')
csvStream.on('data',data=>
{
    console.log(data['название'])
})

csvStream.on('end',() =>
{
    console.log("It's done")
})
fStream.pipe(csvStream)const fs = require('fs')
const csv = require('csv-parser')
const csvStream = csv()
const fStream = fs.createReadStream('favorites.csv')
csvStream.on('data',data=>
{
    console.log(data['название'])
})

csvStream.on('end',() =>
{
    console.log("It's done")
})
fStream.pipe(csvStream)