const fs=require(`fs`)
const csv=require(`csv-parser`)

const names={}

const fsStream=fs.createReadStream(`favorites.csv`)
const csvStream=csv()
csvStream.on(`data`,data=>
{
    const name[`название`])
    if (names[name])
    names[name] += 1
    esle 
    names[name] = 1
})
csv.Stream.on(`end`,()=>
{
    for(let name in names)
    {
        console.log(`${name}: ${names[name]}`)
    }
})

fsStream.pipe(csvStream)