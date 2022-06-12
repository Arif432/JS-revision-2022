let random = Math.floor (Math.random()*10) + 1
console.log(random);
let totalGuess = 0 ;

function guess(){
    let inputNumb = document.getElementById('numb').value
    let msg = document.getElementById('msg')
    
    if (inputNumb == random ){
        totalGuess ++ ;
        msg.innerHTML = `you won  with total guess ${totalGuess} ` ;
    }
    else if (random <= inputNumb) {
        msg.innerHTML = "you entered large numb"
        totalGuess ++ ;
    }
    else {
        msg.innerHTML = "you entered small numb"
        totalGuess ++ ;
    }



}

