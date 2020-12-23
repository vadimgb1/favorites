const fs=require(`fs`)
const csv=require(`csv-parser`)

const fsStream=fs.createReadStream(`favorites.csv`)
const csvStream=csv()
csvStream.on(`data`,data=>
{
    console.log[`название`])
})
csv.Stream.on(`end`,()=>{console.log("Это конец")})
fsStream.pipe(csvStream)