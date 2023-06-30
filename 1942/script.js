// Variables
let hero = {x: 300, y: 450}
let enemies = [{x: 50, y: 50}, {x: 150, y: 50}, {x: 250, y: 50}, {x: 350, y: 50}, {x: 450, y: 50}, {x: 550, y: 50}, {x: 650, y: 50}]
let bomb = {x:-40, y:-40}
let explosion = {x:-30, y:-30}
let bombFlag = 0
let bullets = []
let score = 0
displayExplosion()


// Game Display 
function displayHero() {
    document.getElementById('hero').style['top'] = hero.y + "px";
    document.getElementById('hero').style['left'] = hero.x + "px";
}

function displayEnemies() {
    let output = ""
    for (i=0; i<enemies.length; i++) {
        output += "<div class='enemy1' style='top:" + enemies[i].y + "px; left:" + enemies[i].x + "px;'></div>"
    }
    document.getElementById('enemies').innerHTML = output
}

function moveEnemies() {
    for (i=0; i<enemies.length; i++) {
        enemies[i].y +=5
        if (enemies[i].y > 540) {
            enemies[i].y = 10
            enemies[i].x = Math.random()*700
        }
    }
}

function displayBullets() {
    let output = ""
    for (i=0; i<bullets.length; i++) {
        output += "<div class='bullet' style='top:" + bullets[i].y + "px; left:" + bullets[i].x + "px;'></div>"
    }
    document.getElementById('bullets').innerHTML = output
}

function moveBullets() {
    for (i=0; i<bullets.length; i++) {
        bullets[i].y -=5
        if (bullets[i].y < 10) {
            bullets[i] = bullets[bullets.length-1]
            bullets.pop()
        }
    }
}

function displayBomb() {
    document.getElementById('bomb').style['top'] = bomb.y + "px"
    document.getElementById('bomb').style['left'] = bomb.x + "px"
}

function moveBomb() {
    if (bombFlag==1) {
        bomb.x +=10
        if (bomb.x > 990) {
            bomb.x = -40
            bombFlag = 0
        }
    } else {
        bombFlag = Math.round(Math.random()*100)
        bomb.y = Math.random()*350
    }
}

function displayExplosion() {
    document.getElementById('explosion').style['top'] = explosion.y + "px"
    document.getElementById('explosion').style['left'] = explosion.x + "px"
    document.getElementById('hit').play()
}

function displayScore() {
    document.getElementById('score').innerText = score
}

function detectCollision() {
    for (let j=0; j<enemies.length; j++) {
        function enemyReset() {
            enemies[j] = enemies[enemies.length-1]
            enemies.pop()
            enemies.push({x: Math.random()*700+50, y: 50})
        }
        for (let i=0; i<bullets.length; i++) {
            if (Math.abs(bullets[i].x - enemies[j].x)<20 && Math.abs(bullets[i].y - enemies[j].y)<20) {
                score +=10
                explosion.y = enemies[j].y 
                explosion.x = enemies[j].x 
                displayExplosion()
                enemyReset()
                break
            } else if (Math.abs(bullets[i].x - bomb.x)<20 && Math.abs(bullets[i].y - bomb.y)<20) {
                score +=100
                explosion.y = bomb.y 
                explosion.x = bomb.x 
                displayExplosion()
                bomb = {x:-40, y:-40}
                break
            } 
        }
        if (Math.abs(hero.x-enemies[j].x)<10 && Math.abs(hero.y-enemies[j].y)<10) {
            score -=500
            enemyReset()
        } else if (Math.abs(hero.x-bomb.x)<10 && Math.abs(hero.y-bomb.y)<10) {
            score -=500
            bomb = {x:-40, y:-40}
        } 
        displayScore()
    }
}

function gameLoop() {
    displayHero()
    moveEnemies()
    displayEnemies()  
    moveBullets()
    displayBullets()
    moveBomb()  
    displayBomb()
    detectCollision()
}
setInterval(gameLoop, 50)


// User Actions
document.onkeydown = function(a) {
    if (a.key=="ArrowUp" && hero.y>20) {
        hero.y -=10
    } else if (a.key=='ArrowRight' && hero.x<=960) {
        hero.x +=10
    } else if (a.key=='ArrowDown' && hero.y<=510) {
        hero.y +=10 
    } else if (a.key=='ArrowLeft' && hero.x>20) {
        hero.x -=10
    } else if (a.key == ' ') {
        bullets.push({x: hero.x+5, y: hero.y-10})
    }
    displayHero()
}
