// let a = prompt(" first val")
// let b = prompt(" 2nd val")
// console.log ( rect(a , b) )
// function rect(a,b){
//     return  ( a*b > 20 ? "greater than 20" : "less than 20" );
// }


// scoping
// let is available in block scope
// var is function scope
//using  'var' you will play with window property whn declre globl
// example show windwo props on chorome

// var name = "mua" props of wind
console.log( names() )
function names(){
    var name = "asd"
    return name.length
}
