let buttons =document.getElementsByTagName("button")

let safe = []

for (let index = 0; index < buttons.length; index++) {
    safe.push(buttons[index].classList[1])
    
}
//we didint console before for loop bcz values will shown after for
console.log(safe)

function coloring(clicked) {
    if (clicked.value==="blue") {
        blue()
    }   
    if (clicked.value==="green") {
        green()
    }     
    if (clicked.value==="random") {
        random()
    } 
    if (clicked.value==="reset") {
        reset()
    } 
}
function reset() {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.remove(buttons[index].classList[1])
        buttons[index].classList.add(safe[index])
    }
    
}
let options = ["btn-primary","btn-success","btn-danger"]
function random() {   
    for (let index = 0; index < buttons.length; index++) {
        //butons index calsslist comes to 0 button's classlists this will btn and primary-btn
        // now from every option of buttons btn n primary for each button select property 1 primary 
        buttons[index].classList.remove(buttons[index].classList[1])
        let random = Math.floor(Math.random()*3)
        buttons[index].classList.add(options[random])
    }
}
function blue() {
    for (let index = 0; index < buttons.length; index++) {
        //butons index calsslist comes to 0 button's classlists this will btn and primary-btn
        // now from every option of buttons btn n primary for each button select property 1 primary 
        buttons[index].classList.remove(buttons[index].classList[1])
        //goto to every btn clss list and add prop of priamry buton
        buttons[index].classList.add("btn-primary")      
    }   
}
function green() {
    for (let index = 0; index < buttons.length; index++) {
        //butons index calsslist comes to 0 button's classlists this will btn and primary-btn
        // now from every option of buttons btn n primary for each button select property 1 primary 
        buttons[index].classList.remove(buttons[index].classList[1])
        //goto to every btn clss list and add prop of priamry buton
        buttons[index].classList.add("btn-success")       
    }
}