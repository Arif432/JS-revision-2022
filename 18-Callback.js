
function assignVals() {
    let first  = document.getElementById('num1').value
    let sec = document.getElementById('num2').value
    let ans = add(first , sec)
    display(ans)
}

function add(...numbs){
    let total = 0
    for( numb of numbs){
        total += Number(numb)
    }
    return total
}

function display( addFUNC){
    let result = document.getElementById("result")
    result.innerHTML = addFUNC
}


