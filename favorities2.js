const fs = require('fs'),
csv = require('csv-parser')
const names = {}

const stream = fs.createReadStream('favorites.csv').pipe(csv())

stream.on('data', data =>
{
let name = data['название'].toLowerCase()
if(names[name])
{
names[name] += 1
}
else
names[name] = 1
})

stream.on('end', ()=>
{
for(let name in names)
console.log(`${name}: ${names[name]}`)

})
stream.on('end', ()=>
{
names = Object.keys(names).sort((a,b) => names[a] - names[b]).reverse()
.reduce((a, v) => {a[v] = names[v]; return a;}, {})

console.table(names)
})
