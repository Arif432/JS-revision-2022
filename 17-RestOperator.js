let a=1 , b = 2  , c = 3 ,d =4 

function add( a,b ,...args){
    let total = 0
    for(let numb of args){ // lenth of args  (a and b are not bound in args len)
        total += numb 
    }

    console.log(total);
    return total
}

add(a,b,c,d)