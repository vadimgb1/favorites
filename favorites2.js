const	fs = require('fs'),
		csv = require('csv-parser')

let names = {}

const fStream = fs.createReadStream('favorites.csv')	//поток считывает файл

const csvStream = csv()

csvStream.on('data', data=>
{
    const name = data['название'].toLowerCase().trim()
    if(names[name])
        names[name] += 1
    else
        names[name] = 1
})


csvStream.on('end', ()=>
	{
		names = Object.keys(names).sort((a,b) => names[a] - names[b]).reverse()
			.reduce((a, v) => {a[v] = names[v]; return a;}, {})

	    console.table(names)

	})

fStream.pipe(csvStream)//Данные из первого потока направляем во второй
