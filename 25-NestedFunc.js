// nested function use for security

let user = "Arif"
let msgs = 0 ;

login()

//display user n msgs after log
function login(){

    userName()
    messages()
    function userName() {
    console.log(user);
}

 function messages() {
    console.log(msgs);
}

    // userName()
    // messages()
}

//can be callled without login (unsecurity)
// function userName() {
//     console.log(user);
// }

//  function messages() {
//     console.log(msgs);
// }