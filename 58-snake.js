// const gameBoard = document.getElementById('board')
// const context = gameBoard.getContext('2d')
// const button = document.getElementById('reset')
// const gameWidth = gameBoard.width
// const gameHeight = gameBoard.height
// const scoreText = document.querySelector('#score')

// const unitSize = 25
// let xMove = unitSize
// let foodX;
// let yMove = 0
// let foodY
// let gameRun = false

// let score = 0

// window.addEventListener('keydown', changeDir)

// let snake = [
//     { x: 2 * unitSize, y: 0 },
//     { x: 1 * unitSize, y: 0 },
//     { x: 0, y: 0 }
// ]

// gameStart()
// function gameStart(params) {
//     gameRun = true
//     createFood()
//     drawFood()
//     nextTick()
// }

// function nextTick(params) {
//     if (gameRun) {
//         setTimeout(() => {
//             clearBoard()
//             drawFood()
//             moveSnake()
//             drawSnake()
//             // checkGameOver()
//             nextTick()
//         }, 1000)
//     } else {
//         displayGameOver()
//     }
// }

// function clearBoard(params) {
//     context.fillStyle = 'white'
//     context.fillRect(0, 0, gameWidth, gameHeight)
// }

// function drawSnake(params) {
//     context.fillStyle = 'green'
//     snake.forEach((parts) => {
//         context.fillRect(parts.x, parts.y, unitSize, unitSize)
//     })
// }

// function createFood(params) {

//     function randomFood(min, max) {
//         const randomNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
//         return randomNum
//     }
//     foodX = randomFood(0, gameWidth - unitSize)
//     foodY = randomFood(0, gameHeight - unitSize)
// }

// function drawFood(params) {
//     context.fillStyle = 'red'
//     context.fillRect(foodX, foodY, unitSize, unitSize)
// }

// function moveSnake(params) {

//     const head = {
//         x: snake[0].x + xMove,
//         y: snake[0].y + yMove
//     }

//     // console.log(snake[0].x);
//     snake.unshift(head)

//     if (snake[0].x == foodX && snake[0].y == foodY) {
//         score += 1
//         scoreText.textContent = score
//         createFood()
//     }
//     else {
//         snake.pop()
//     }
// }

// function changeDir(event) {
//     const KEY = event.keyCode
//     console.log(KEY);

//     const UP = 38
//     const DOWN = 40
//     const RIGHT = 39
//     const LEFT = 37

//     const up = (yMove == -unitSize)
//     const down = (yMove == unitSize)
//     const left = (xMove == -unitSize)
//     const right = (xMove == unitSize)

//     switch (true) {
//         case (KEY == LEFT && !right):
//             xMove = -unitSize
//             yMove = 0
//             break

//         case (KEY == UP && !down):
//             yMove = -unitSize
//             xMove = 0
//             break

//         case (KEY == RIGHT && !left):
//             xMove = unitSize
//             yMove = 0
//             break

//         case (KEY == DOWN && !up):
//             yMove = unitSize
//             xMove = 0
//             break
//     }

//     for (let i = 1; i < snake.length; i += 1) {
//         if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
//             gameRun = false
//         }

//     }

// }

// function displayGameOver(params) {

//     gameRun = false
//     context.fillText('game over', gameWidth / 2, gameHeight / 2)
// }

const dir = window.addEventListener('keydown', changeDir)

const gameBoard = document.getElementById('board')
const context = gameBoard.getContext('2d')
const gameWidth = gameBoard.width
const gameHeight = gameBoard.height
const scoreText = document.getElementById('score')
const unitSize = 25
let score = 0
let foodX, foodY
let gameRun = false

let xMove = unitSize
let yMove = 0

let snake = [
    { x: 2 * unitSize, y: 0 },
    { x: 1 * unitSize, y: 0 },
    { x: 0, y: 0 }
]


gameStart()
function gameStart(params) {
    gameRun = true
    createFood()
    drawFood()
    // drawSnake()
    tickGame()
}

function tickGame(params) {

    if (gameRun) {
        setTimeout(() => {
            clearBoard()
            drawSnake()
            tickGame()
            drawFood()
            moveSnake()
            // createFood()
        }, 100)
    }
    else {
        gameOver()
    }
}

function clearBoard(params) {
    context.fillStyle = 'orange'
    context.fillRect(0, 0, gameWidth, gameHeight)
}

function drawSnake(params) {
    snake.forEach(box => {
        // console.log(box.x);
        context.fillStyle = 'green'
        context.fillRect(box.x, box.y, unitSize, unitSize)
    });
}

function moveSnake(params) {

    const head = {
        x: snake[0].x + xMove,
        y: snake[0].y + yMove
    }

    snake.unshift(head)

    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1
        scoreText.textContent = score
        createFood()
    }
    else {
        snake.pop()
    }
}


function createFood(params) {

    function random(min, max) {
        const randomNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
        return randomNum
    }
    foodX = random(0, gameWidth - unitSize)
    foodY = random(0, gameHeight - unitSize)
}

function drawFood(params) {
    context.fillStyle = 'red'
    context.fillRect(foodX, foodY, unitSize, unitSize)
}

function changeDir(event) {
    const KEY = event.keyCode

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    const left = xMove == -unitSize
    const up = yMove == -unitSize
    const right = xMove == unitSize
    const down = yMove == unitSize

    switch (true) {
        case (KEY == LEFT && !right):
            xMove = -unitSize
            yMove = 0
            break
        case (KEY == RIGHT && !left):
            xMove = unitSize
            yMove = 0
            break
        case (KEY == UP && !down):
            yMove = -unitSize
            xMove = 0
            break
        case (KEY == DOWN && !up):
            yMove = unitSize
            xMove = 0
            break
    }

    for (let i = 1; i < snake.length; i++) {
        console.log(snake[0]);
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            gameRun = false
        }

    }
}

function gameOver(params) {
    gameRun = false
    context.font = '50px MV Boli'
    context.textAlign = 'center'
    context.fillStyle = 'blue'
    context.fillText('game over', gameWidth / 2, gameHeight / 2)

}

