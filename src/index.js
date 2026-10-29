import "./styles.css"
import { createBoard, markSquare } from "./ui.js"
import { Player } from "./player.js"
import { Gameboard } from "./gameboard.js"



const firstBoard = document.getElementById('first-board')
const secondBoard = document.getElementById('second-board')

createBoard(firstBoard)
createBoard(secondBoard)

const statusBar = document.getElementById('status-bar')
const squares = secondBoard.querySelectorAll('.square')

const player = new Player()
const aiPlayer = new Player('ai')
let turn = 'player'

aiPlayer.board.placeShip(2, 0, 0)
statusBar.textContent = 'Player turn'



squares.forEach((square) => {
    square.addEventListener("click", () => {
        if (turn === 'player') {
            const result = player.attack(aiPlayer.board, Number(square.dataset.x), Number(square.dataset.y))
            markSquare(square, result)
            if (result === true) {
                if (aiPlayer.board.allShipsSunk()) {
                    statusBar.textContent = 'Game Over! Player wins!'
                    turn = 'game-over'
                    return
                }
            }
            if (result === false) {
                statusBar.textContent = 'Ai turn'
                turn = 'ai'
                playAiTurn()
            }
        }
    })
})

function playAiTurn() {
    setTimeout(() => {
        const { result, x, y} = aiPlayer.randomAttack(player.board)
        const targetSquare = firstBoard.querySelector(`.square[data-x="${x}"][data-y="${y}"]`)
        markSquare(targetSquare, result)
        if (result === true) {
            if (player.board.allShipsSunk()) {
                statusBar.textContent = 'Game Over!, Ai wins!'
                turn = 'game-over'
                return
            }
            playAiTurn()
        } else {
            statusBar.textContent = "Player turn"
            turn = 'player'
        }
    }, 600);
}