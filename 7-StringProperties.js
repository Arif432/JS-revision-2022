

// global varable 'name' is depricatted


let nam = "  Bbabr bhi  "

console.log(nam);
console.log( nam.length )
console.log(nam.charAt(3));
console.log(nam.indexOf("aB"));
console.log(nam.lastIndexOf('b'));
nam = nam.trim();
console.log( nam.length )
console.log(nam.replace( "ba" , "ab" ));


let first , second ;
function names(){
    let string = document.getElementById('name').value
    
    let space =  string.indexOf(' ') 

    first = string.slice(0 , space)

    document.getElementById('first').innerHTML += first 

    second = string.slice(space , string.length )

    document.getElementById('2nd').innerHTML += second
    
}



// function sada(){
//     let name  = "asda"
// }

