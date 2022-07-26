// const cells = document.querySelectorAll('.cell')
// const info = document.getElementById('info')

// const winCondition = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ]

// let options = ["", "", "", "", "", "", "", "", ""]
// let running = false
// let currentPlayer = "X"

// startGame()
// function startGame(params) {
//     cells.forEach(element => element.addEventListener('click', cellClicked));
//     info.innerHTML = `${currentPlayer} turn`
//     running = true
// }

// function cellClicked(params) {
//     // console.log(params);
//     const index = this.getAttribute('cellIndex')

//     if (options[index] != "" || !running) {
//         return
//     }
//     // this was clicked
//     updateCell(this, index)
//     changePlayer()
//     checkWinner()
// }

// function updateCell(div, index) {
//     options[index] = currentPlayer
//     // console.log(options[index]);
//     div.innerHTML = currentPlayer
// }

// function changePlayer(params) {
//     currentPlayer = (currentPlayer == "X") ? "O" : "X"
//     info.innerHTML = `${currentPlayer} turn`
// }

// function checkWinner(params) {
//     let roundWon = false

//     for (let i = 0; i < winCondition.length; i++) {
//         const condition = winCondition[i]; // [0,1,2]
//         console.log(condition[0]);
//         // console.log('cond' + condition[]);
//         const a = options[condition[0]] //0 3 6 0 1 2 0 2

//         const b = options[condition[1]] // 1 4 7 3 4 5 4 4
//         // console.log("b" + b);
//         const c = options[condition[2]] //2 5 8 6 7 8 8 6
//         // console.log('c' + c);

//         if (a == "" || b == "" || c == "") {
//             continue
//         }
//         if (a == b && b == c) {
//             console.log(options);
//             roundWon = true
//             changePlayer()
//             break
//         }
//     }

//     if (roundWon) {
//         // changePlayer()
//         info.innerHTML = `${currentPlayer} won`
//         running = false
//     }
//     else if (!options.includes("")) {
//         info.textContent = 'Draw'
//         running = false
//     }
// }


const cells = document.querySelectorAll('.cell')
const info = document.getElementById('info')

let currentPlayer = 'X'

let running = false

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let options = ["", "", "", "", "", "", "", "", ""]

let draw = Number(document.getElementById('draw').innerHTML)
let restart = document.getElementById('start')

startGame()
function startGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', cellClicked)
        restart.addEventListener('click', rematch)
    });

    info.innerHTML = currentPlayer
    running = true
}

function cellClicked(params) {

    const index = this.getAttribute('cellIndex')

    if (!running || options[index] != '') {
        return
    }

    updateCell(this, index)
    // console.log(index);
    changePlayer()
    decideWinner()

}

function updateCell(div, index) {
    options[index] = currentPlayer  // on touch 0 cell X store 0
    div.innerHTML = currentPlayer
}

function changePlayer(params) {
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    info.innerHTML = currentPlayer
}

function decideWinner(params) {
    let win = false
        ;
    for (let i = 0; i < winConditions.length; i++) {
        const combination = winConditions[i] // 0 1 2
        const a = options[combination[0]] // if op[0] = x
        const b = options[combination[1]] //  op[1] = x
        const c = options[combination[2]] // op [2] =x ???

        if (a == '' || b == '' || c == '') {
            continue
        }
        if (a == b && b == c) {
            changePlayer()
            win = true
            running = false
            break
        }
    }

    if (win) {
        info.textContent = currentPlayer + " is winner"
        totalWins()
    }
    else if (!options.includes('')) {
        info.textContent = "Draw"
        totalDraw()
        running = false
    }
}

function totalWins() {
    let X_wins = Number(document.getElementById('X_win').innerHTML)
    let O_wins = Number(document.getElementById('O_win').innerHTML)

    currentPlayer == 'X' ?

        document.getElementById('X_win').innerHTML = X_wins + 1 :
        document.getElementById('O_win').innerHTML = O_wins + 1
}

function totalDraw(params) {
    document.getElementById('draw').innerHTML = draw + 1;
}

// rematch.onclick = function restart(params) {

//     console.log('frsa');
// }


function rematch() {
    info.innerHTML = currentPlayer + " turn"
    cells.forEach(element => {
        element.innerHTML = ''
    });
    options = ["", "", "", "", "", "", "", "", ""]
    running = true
}