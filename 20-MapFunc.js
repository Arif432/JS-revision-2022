let numb = [ 1,2,3,4,5 ]
 
let x =[] ;
numb.map( (number , index  ,arr)=>{
    x[index] = Math.pow(number , 2)
} )



console.log(x );