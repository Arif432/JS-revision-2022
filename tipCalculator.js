let input1 = document.getElementById('input1')
input1.addEventListener('input', changeTotal)

let input2 = document.getElementById('input2')
input2.addEventListener('input', changeTotal)


//radial btns
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('min')


addBtn.addEventListener('click', (events) => {
    addOrSubtract(events)
    changeTotal()
})

subBtn.addEventListener('click', (events) => {
    // console.log(events);
    addOrSubtract(events)
    changeTotal()
})

//float on right
let total = document.getElementById('num')

//between radial btns
let persons = document.getElementById('totalPersons')

let totalPeople = 1

function changeTotal(params) {
    // inp1 
    let inp1Val = Number(input1.value)
    //inp2
    let inp2Val = Number(input2.value)

    let mult = inp1Val * inp2Val
    // div inp1 with between btns val
    total.innerHTML = (Math.round(inp1Val / totalPeople) + (mult / 100)).toFixed(2)
}

// clicked add btn ? or sub btn ?
function addOrSubtract(events) {
    
    events.path[0].id == 'add' ? (totalPeople = totalPeople + 1) : totalPeople = totalPeople - 1
    persons.innerHTML = totalPeople

    console.log('increase');
}
