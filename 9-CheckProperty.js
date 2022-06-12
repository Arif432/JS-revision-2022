function submit(){

    let checkbox = document.getElementById("checkbox") ;
    let visa = document.getElementById("visa") ;
    let paypal = document.getElementById("paypal") ;

    if (checkbox.checked)
    document.getElementById('msg').innerHTML = " you are subscribed "
    
    else if (visa.checked) 
    document.getElementById('msg').innerHTML = " paying from visa "

    else if(paypal.checked){
    document.getElementById('msg').style.color = 'yellow'
    document.getElementById('msg').innerHTML = " paypal "
    }
    

}