const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

let win = Number(document.getElementById('win_count').innerHTML)
let loss = Number(document.getElementById('loss_count').innerHTML)
let draw = Number(document.getElementById('draw_count').innerHTML)

let allElement = [rock, paper, scissor]

allElement.forEach(element => {
    element.addEventListener('click', playerSelect)
});

let elementSelectedbyPlayer;
let elementSelectedbyComputer;

function playerSelect(object) {

    switch (object.path[0].id) {
        case 'rock':
            elementSelectedbyPlayer = 'rock'
            break
        case 'paper':
            elementSelectedbyPlayer = 'paper'
            break
        case 'scissor':
            elementSelectedbyPlayer = 'scissor'
            break
    }

    // let x = computerSelect(object)
    computerSelect(object)
    // console.log("plauer" + elementSelectedbyPlayer);
    // console.log("comp" + x);
    drawCondition()
    winCondition()
    lossCondition()
}

function computerSelect(object) {
    let randomNumber = Math.floor(Math.random() * 3)

    elementSelectedbyComputer =
        object.path[1].children[randomNumber].id

    return elementSelectedbyComputer
}

let create = document.getElementById('results')
let child = document.createElement('p')

function drawCondition() {
    if (elementSelectedbyComputer === elementSelectedbyPlayer) {
        draw = draw + 1
        document.getElementById('draw_count').innerHTML = draw

        child.style.color = 'blue'
        child.innerHTML =
            `Player:${elementSelectedbyPlayer}, Computer: 
            ${elementSelectedbyComputer} Draw`

        create.append(child)
    }
}

function winCondition() {

    if (elementSelectedbyPlayer === 'rock' && elementSelectedbyComputer === 'scissor')
        winCountDisplay()
    else if (elementSelectedbyPlayer === 'paper' && elementSelectedbyComputer === 'rock')
        winCountDisplay()
    else if (elementSelectedbyPlayer === 'scissor' && elementSelectedbyComputer === 'paper')
        winCountDisplay()
}

function lossCondition() {

    if (elementSelectedbyComputer === 'paper' && elementSelectedbyPlayer === 'rock')
        lossDisplayCount()
    else if (elementSelectedbyComputer === 'rock' && elementSelectedbyPlayer === 'scissor')
        lossDisplayCount()
    else if (elementSelectedbyComputer === 'scissor' && elementSelectedbyPlayer === 'paper')
        lossDisplayCount()
}

function winCountDisplay() {
    // console.log('you win');
    win += 1
    document.getElementById('win_count').innerHTML = win

    child.innerHTML = `Player: ${elementSelectedbyPlayer} Computer:
            ${elementSelectedbyComputer}, you win!`

    child.style.color = 'green'
    create.append(child)
}

function lossDisplayCount() {
    // console.log(elementSelectedbyComputer);
    loss += 1
    document.getElementById('loss_count').innerHTML = loss

    child.innerHTML = `Player: ${elementSelectedbyPlayer}, 
    computer: ${elementSelectedbyComputer}, you loss`

    child.style.color = 'red'
    create.append(child)
}

 // elementSelectedbyPlayer === 'rock' &&
    //     elementSelectedbyComputer === 'scissor' ? winCountDisplay() :
    //     elementSelectedbyPlayer === 'paper' &&
    //         elementSelectedbyComputer === 'rock' ? winCountDisplay() :
    //         elementSelectedbyPlayer === 'scissor' &&
    //             elementSelectedbyComputer === 'paper' ? winCountDisplay() : null