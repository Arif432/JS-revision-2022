// console.log( new Map() );

let map  = new Map([
    [100, "arif"] ,
    [50 , "afridi"],
    [10, "asad"] ,
    [5 , "shafiq"],
])

console.log(map);
map.set("sc" ,1000)
map.delete(100)

map.forEach (( num ,val ) => console.log( num  , val))

console.log( map.get(5))
console.log( map.size )