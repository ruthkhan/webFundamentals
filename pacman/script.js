// Variables
let worldWidth 
let worldHeight 

var pacman = {x: 1, y: 1}
let ghost = {x: 1, y: 8}
let ghost2 = {x: 8, y: 1}

var score = 0
let remainingScore = 0
let randomGhost = 0
let ghostStart
let ghost2Start

// Create World
let world = [] 
function newWorld() {
    worldWidth = 10 + Math.round(Math.random()*10)
    worldHeight = 10 + Math.round(Math.random()*5)
    for (let i=0; i<worldHeight; i++) {
        world[i]=[]
        for (let j=0; j<worldWidth; j++) {
            if (i==0 || i==(worldHeight-1) || j==0 || j==(worldWidth-1)) {
                world[i][j] = 1
            } else if ((world[i-1][j-1] + world[i-1][j] + world[i-1][j+1] + world[i][j-1])<=11) {
                world[i][j] = 3 
            } else {
                world[i][j] = Math.ceil(Math.random()*7)
            }
        }
    }
    world[pacman.y][pacman.x]=0
    ghostStart = setInterval(displayGhost, 300, ghost)
    ghost2Start = setInterval(displayGhost, 300, ghost2)
}

// Display Game 
function displayWorld() {
    var output = ""
    remainingScore = 0
    for (let i=0; i<world.length; i++) {
        output += "<div class='row'>"
        for (let j=0; j<world[i].length; j++) {
            if (world[i][j]==7) {
                output  += "<div class='cherry'></div>"
                remainingScore +=50
            } else if (world[i][j]>=3) {
                output += "<div class='coin'></div>"
                remainingScore +=10
            } else if (world[i][j]>=1) {
                output += "<div class='brick'></div>"
            } else if (world[i][j]==0) {
                output += "<div class='empty'></div>"
            }
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output
}

function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y*20+"px"
    document.getElementById('pacman').style.left = pacman.x*20+"px"
}

function displayGhost(ghostId) {
    randomGhost = Math.floor(Math.random()*4)
    if (randomGhost==0 && (world[ghostId.y+1][ghostId.x]>=3 || world[ghostId.y+1][ghostId.x]==0)) {
        ghostId.y +=1
    } else if (randomGhost==1 && (world[ghostId.y-1][ghostId.x]>=3 || world[ghostId.y-1][ghostId.x]==0)) {
        ghostId.y -=1 
    } else if (randomGhost==2 && (world[ghostId.y][ghostId.x+1]>=3 || world[ghostId.y][ghostId.x+1]==0)) {
        ghostId.x +=1
    } else if (randomGhost==3 && (world[ghostId.y][ghostId.x-1]>=3 || world[ghostId.y][ghostId.x-1]==0)) {
        ghostId.x -=1
    }
    console.log(ghostId)
    if (ghostId==ghost) {
        document.getElementById('ghost').style.top = ghost.y*20+"px"
        document.getElementById('ghost').style.left = ghost.x*20+"px"
    } else if (ghostId==ghost2) {
        document.getElementById('ghost2').style.top = ghost2.y*20+"px"
        document.getElementById('ghost2').style.left = ghost2.x*20+"px"
    }

    // Meeting the ghost
    if (ghostId.y==pacman.y && ghostId.x==pacman.x) {
        alert('Game Over!')
        initialise()
    }

}

function displayScore() {
    document.getElementById('score').innerHTML = score 
    document.getElementById('score').style.left = (worldWidth*20 + 10)+"px"
}

function initialise() {
    clearInterval(ghostStart)
    clearInterval(ghost2Start)
    world = []
    score = 0
    pacman = {x:1, y:1} 
    ghost = {x:8, y:1}
    ghost2 = {x:1, y:8}
    newWorld()
    displayWorld()
    displayPacman()
    displayScore()
}

initialise()


// Moving Pacman
document.onkeydown = function(e) {
    if (e.key == "ArrowDown" && (world[pacman.y+1][pacman.x]>=3 || world[pacman.y+1][pacman.x]==0)) {
        document.getElementById('pacman').style.rotate = "90deg"
        pacman.y +=1
    } else if (e.key == "ArrowUp" && (world[pacman.y-1][pacman.x]>=3 || world[pacman.y-1][pacman.x]==0)) {
        document.getElementById('pacman').style.rotate = "270deg"
        pacman.y -=1 
    } else if (e.key == "ArrowRight" && (world[pacman.y][pacman.x+1]>=3 || world[pacman.y][pacman.x+1]==0)) {
        document.getElementById('pacman').style.rotate = "0deg"
        pacman.x +=1
    } else if (e.key == "ArrowLeft" && (world[pacman.y][pacman.x-1]>=3 || world[pacman.y][pacman.x-1]==0)) {
        document.getElementById('pacman').style.rotate = "180deg"
        pacman.x -=1
    }

    // Eating coins & cherries
    if (world[pacman.y][pacman.x]>=3) {
        if (world[pacman.y][pacman.x]==7) {
            score +=50
        } else {
            score +=10
        }
        world[pacman.y][pacman.x] = 0
        displayWorld()
        displayScore()
    }
    displayPacman()

    // Winning the game 
    if (remainingScore == 0) {
        alert('You Won!')
        initialise()
    }

    // Meeting the ghost
    if ((pacman.y==ghost.y && pacman.x==ghost.x) || (pacman.y==ghost2.y && pacman.x==ghost2.x)) {
        alert('Game Over!')
        initialise()
    }
}