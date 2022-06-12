
let names = ["muhammad" ,"arif"  , "nawaz"]

// names.forEach( capital )
// names.forEach( (element)=>console.log(element) )

// function capital( element , index , array ){
//     array[index] = element.toUpperCase()
// }


let n = []
names.forEach( (element , index ) =>{
    n[index] =  element[0].toUpperCase() + element.substring(1)
    console.log(names[index]);
})

console.log(n);

// let numb = [1,2,3,4,5,6]

// let sum = 0 ;
// numb.forEach( (element , index , array)=>{
//     numb[index] += element
//     sum += element    
// } )
// console.log(sum);