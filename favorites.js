const	fs = require('fs'),
		csv = require('csv-parser')

	const fStream = fs.createReadStream('favorites.csv')	//поток считывает файл
	const csvStream = csv().on('data', data=>{console.log(data['название'])}) 
	fStream.pipe(csvStream)//Данные из первого потока направляем во второй