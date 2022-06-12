let names = ["muhammad" , "arif" ,"nawaz"]
let othersName = ["Must" , "babbo" ,"ranjha"]

let spreadOperator = [...names , ...othersName]


//passing names and otherNames to dry by single para 

// rest operator in argument
function dry( ...names ){
    console.log(...names[1]);
}
 
let naming = ["muhammad" , "arif" ,"nawaz"]
let othersNames = ["Must" , "babbo" ,"ranjha"]

dry(naming , othersNames)

// let names = [1,2,3,4,5,5]
// let someOtherNames= [ 3,41,90,324 ]
// names = [...someOtherNames , ...names]
// console.log(names);

// max from array ;

// console.log( Math.max( ...names ) )

// console.log(...names);