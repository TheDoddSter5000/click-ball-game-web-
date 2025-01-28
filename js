let score = 0

const ball = document.getElementById("ball")
const scoreDisplay = document.getElementById("score")

let positionX = 100
let positionY = 100
let velocityX = 5
let velocityY = 5
const BallSize = 50


function moveBall(){
    positionX += velocityX;
    positionY += velocityY;
    
    if(positionX + BallSize >= window.innerHeight || positionX <=0){
        velocityX = -velocityX
    }
    if(positionY + BallSize >= window.innerHeight || positionY <=0){
        velocityY = -velocityY
    }

    ball.style.left = `${positionX}px`
    ball.style.top = `${positionY}px`

}


function randomPosition(){
    positionY = Math.random() * (window.innerHeight - 50)
    positionX = Math.random() * (window.innerWidth - 50)

    ball.style.left = `${positionX}px`
    ball.style.top = `${positionY}px`

}

ball.addEventListener("click", () =>{
    score++
    scoreDisplay.textContent = `score: ${score}`
    moveBall()
    randomPosition()
})

moveBall()

setInterval(moveBall, 20)
