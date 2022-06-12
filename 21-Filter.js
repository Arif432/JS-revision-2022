

//forEach apply a function on whole array each elemnt 
//map apply function each element and return new array 
//reduce apply on array to return single value
//filter apply on array a function to return new array after specific test


let array = [1,2,3,4,5,20,30,50]


let x = array.reduce((prev  , curnt)=>{
    return prev+curnt
})

console.log(x);

// let x = array.filter((elemnt , ind)=>{
//    if (elemnt > 18) {
//       return array[ind] = elemnt
//     // return elemnt >18
//    }
// })
// console.log(x);

// array.map((numb , inde)=>{
//     array[inde] = numb+10 
//     // console.log(numb);
// })


// array.forEach((element , index )=>{
//     array[index] = element*2
// })

// //1st arg is element 
// //forEach do work on same array 
// array.forEach((element)=>{
//     console.log(element);
// })




// let ages = [17,18,19,20]

// // let eigtheen = ages.filter((element)=>{
// //     return element>18
// // })


// // eigtheen.forEach((element)=>{
// //     console.log( element )
// // })
 
// let total =  ages.reduce((total , price)=>{
//     return total + price
// })

// console.log(total);
