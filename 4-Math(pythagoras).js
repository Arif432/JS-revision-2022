// let num = 3.545 

// let num2 = 2 , num3 = 5   

// let max , min ;

// // num = Math.floor(num)// less int
// // num = Math.ceil(num)
// // num = Math.round(num)
// // num = Math.pow(num , 2)
// // num = Math.sqrt(num)

// max = Math.max(num , num2 ,num3)
// min = Math.min(num , num2 ,num3)
// console.log(max , min)

// add sq of two inputs and sqrt them

let num1 , num2 ;
let pythaAns ;

function calculation(){
    num1 = document.getElementById('input1').value
    num1 = Number(num1)
    num2 = document.getElementById('input2').value
    num2 = Number(num2)

    pythaAns = Math.sqrt( Math.pow(num1,2) + Math.pow(num2,2) )

    document.getElementById('ans').innerHTML += "ans is " + pythaAns
}



