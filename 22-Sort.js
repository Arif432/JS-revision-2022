
let arr = [3,2,5,1,8,6]

arr.sort( desend )

arr.forEach( (element)=>{

    console.log(element);
} )

function desend(x,y){
    return x-y
}
function ascend(x,y){
    return y-x
}