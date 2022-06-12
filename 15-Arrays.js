// let fruits = ["grapes" , "apple " , "banana " ,"lemon" , "orange"]
// let numbs = [ 1,2,344, 5]

////SOME USEFUL METHODS (ARRAY 15.1)
// fruits[0] = "mango"
// console.log(fruits);//replace

// fruits.push("grapes") //add
// console.log(fruits);

// fruits.pop() ; // remove lase
// console.log(fruits);

// fruits.unshift("astghfar") // add in beginning
// console.log(fruits);

// fruits.shift()//remove beginning
// console.log(fruits);

// console.log(fruits.length);

// let index = fruits.indexOf('lemon') 
// console.log(index);


//// LOOP (ARRAY 15.2)
// for( i of fruits ){
//     console.log(i);
// }


// ////SORT ARRAY(15.3) 
// fruits = fruits.sort();
// console.log(fruits);
// fruits.reverse() //reverse
// console.log(fruits);


// 2D arrays (15.4)
let fruits = [ "apple" , "banana" ,"grapes" ]
let books = ["history" , "fiction" ,"other"]
let fastFood = ["pizza" ,"burger"]

let items = [fruits , books , fastFood]
items[0][1] = "mango" //banana => mango"
items[2][1] = "shawarma"

for(  foods of items){
    for( singlefood of foods){
        console.log(singlefood);
    }
}