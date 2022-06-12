// circum =  2*pie*r

const pie = 2*3.14 ;

function calculate_Circum(){
    let x = document.getElementById('radius').value
    document.getElementById('total-circum').innerHTML += pie*x
}

function del(){
    document.getElementById('total-circum').innerHTML = ''
}