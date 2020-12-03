//Вывод названий шоу
const fs = require('fs')
const csv = require('csv-parser')

const fsStream = fs.createReadStream('favorites.csv')
const csvStream = csv()
csvStream.on('data', data =>
{
    console.log(data['название'])
})
csvStream.on('end', ()=>{console.log("Это конец.")})

fsStream.pipe(csvStream)
