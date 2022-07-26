const canva = document.getElementById('canva')
const context = canva.getContext('2d')
const move = window.addEventListener('keydown', changeDir)
const gameHeight = canva.height
const gameWidth = canva.width

let unitSize = 15
let gameRun = false
let upMove = 0, downMove = 0
let ballSpeed = 1, ballXdir = 0, ballYdir = 0
let ballX = gameWidth / 2
let ballY = gameHeight / 2

let rad = 7

let firstPlayer = [
    { x: 0, y: 3 * unitSize },
    { x: 0, y: 2 * unitSize },
    { x: 0, y: 1 * unitSize },
    { x: 0, y: 0 }
]

let secondPlayer = [
    { x: 484, y: 3 * unitSize },
    { x: 484, y: 2 * unitSize },
    { x: 484, y: 1 * unitSize },
    { x: 484, y: 0 }
]

gameStart()
function gameStart(params) {
    gameRun = true
    createBar()
    tickGame()
}

function tickGame(params) {
    setTimeout(() => {
        clearTable()
        createBar()
        drawBall(ballX, ballY)
        moveBall()
        collision()
        tickGame()
    }, 10)
}

function clearTable(params) {
    context.fillStyle = 'cyan'
    context.fillRect(0, 0, gameWidth, gameHeight)
}

function createBar(params) {
    barCreation(firstPlayer, 'red')
    barCreation(secondPlayer, 'blue')
}

function barCreation(player, color) {
    player.forEach(singleBlock => {
        context.fillStyle = color
        context.fillRect(singleBlock.x, singleBlock.y, unitSize, unitSize)
    });
}

function changeDir(event) {
    const KEY = event.keyCode
    // console.log(KEY);
    dirChanger(KEY)
    dirChanger2(KEY)

    // console.log(KEY);
    const UP = 38
    const DOWN = 40
    const UP2 = 87
    const DOWN2 = 83

    switch (true) {
        case (KEY == DOWN || KEY == DOWN2):
            downMove = unitSize
            upMove = 0
            break
        case (KEY == UP || KEY == UP2):
            upMove = -unitSize
            downMove = 0
            break
    }
}

function dirChanger(KEY) {
    const changer = {
        x: firstPlayer[0].x + 0,
        y: firstPlayer[0].y
    }
    movePlayer1(changer, KEY)
}

function movePlayer1(changer, key) {
    if (key == 40) {
        changer.y = changer.y + downMove
        playerPoping1(changer)
    }

    else if (key == 38) {
        changer.y = changer.y + upMove
        playerPoping1(changer)
    }
}

function dirChanger2(KEY) {
    const changer = {
        x: secondPlayer[0].x + 0,
        y: secondPlayer[0].y
    }
    movePlayer2(changer, KEY)
}

function movePlayer2(changer, key) {
    if (key == 83) {
        changer.y = changer.y + downMove
        playerPoping2(changer)
    }

    else if (key == 87) {
        changer.y = changer.y + upMove
        playerPoping2(changer)
    }
}

function playerPoping1(changer) {
    firstPlayer.unshift(changer)
    firstPlayer.pop()
}

function playerPoping2(changer) {
    secondPlayer.unshift(changer)
    secondPlayer.pop()
}

function moveBall(params) {
    ballX += (ballSpeed * ballXdir)
    ballY += (ballSpeed * ballYdir)
}


function collision(params) {
    if (ballY <= 0 + rad) {
        ballYdir *= -1
    }
    if (ballY >= gameHeight - rad) {
        ballYdir *= -1
    }
    if (ballX <= 0) {
        createBall()
    }
    if (ballX >= gameWidth) {
        createBall()
    }
    if (ballX <= (firstPlayer[0].x + unitSize + rad)) {
        if (ballY > 74 && ballY < (firstPlayer[0].y + 100)) {
            ballX = (firstPlayer[0].x + unitSize) + rad
            ballXdir *= -1
            ballSpeed += 1
        }
    }
    if (ballX >= (secondPlayer[0].x - rad)) {
        if (ballY > secondPlayer[0].y && ballY < secondPlayer[0].y + 100) {
            ballX = secondPlayer[0].x - rad
            ballXdir *= -1
            ballSpeed += 1
        }
    }
}

createBall()
function createBall() {
    ballSpeed = 1
    if (Math.round(Math.random()) == 1) {
        ballXdir = 1
    }
    else {
        ballXdir = -1
    }
    if (Math.round(Math.random()) == 1) {
        ballYdir = 1
    }
    else {
        ballydir = -1
    }

    ballX = gameWidth / 2
    ballY = gameHeight / 2
    drawBall(ballX, ballY)
}

function drawBall(ballX, ballY) {
    context.fillStyle = 'yellow'
    context.lineWidth = 2
    context.beginPath()
    context.arc(ballX, ballY, rad, 0, 2 * Math.PI)
    context.stroke()
    context.fill()
}

