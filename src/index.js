import "./styles.css"
import { createBoard, markSquare } from "./ui.js"
import { Player } from "./player.js"
import { Gameboard } from "./gameboard.js"



const firstBoard = document.getElementById('first-board')
const secondBoard = document.getElementById('second-board')
createBoard(firstBoard)
createBoard(secondBoard)


const player = new Player()
const aiPlayer = new Player('ai')
aiPlayer.board.placeShip(2, 0, 0)

const squares = secondBoard.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener("click", () => {
        const result = player.attack(aiPlayer.board, Number(square.dataset.x), Number(square.dataset.y))
        markSquare(square, result)
    })
})