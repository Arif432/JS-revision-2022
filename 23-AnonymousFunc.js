
// anything declare in const , other things cant be named same compile error
const hello = function (x){
    console.log("help" + x);
}

let x = 20
hello( x )


//without error of var and func name being same prog continuse 
// show err while runtime
// function hello (){
//     console.log("kabhi");
// }
// hello()

// let hello = "wah"
// console.log("hello");


// let num = document.getElementById('num').innerHTML
// let numb = Number(num)

// document.getElementById('increase').onclick = function(){
//     numb += 1
//     document.getElementById('num').innerHTML = numb  
// }

// document.getElementById('decrease').onclick = function(){
//     numb -= 1 
//     document.getElementById('num').innerHTML = numb  
// }