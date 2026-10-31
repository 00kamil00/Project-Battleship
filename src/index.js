import "./styles.css"
import { createBoard, markSquare, clearBoards } from "./ui.js"
import { Player } from "./player.js"
import { Gameboard } from "./gameboard.js"



const firstBoard = document.getElementById('first-board')
const secondBoard = document.getElementById('second-board')

createBoard(firstBoard)
createBoard(secondBoard)

const statusBar = document.getElementById('status-bar')
const squares = secondBoard.querySelectorAll('.square')
const startBtn = document.getElementById('start-btn')

let player = new Player()
let aiPlayer = new Player('ai')
let turn = 'none'

statusBar.textContent = 'Start a game!'

function startGame() {
    player = new Player()
    aiPlayer = new Player('ai')
    turn = 'player'
    statusBar.textContent = 'Player turn'
    startBtn.textContent = 'Restart game'
    player.board.generateRandomBoard()
    aiPlayer.board.generateRandomBoard()
    clearBoards(firstBoard)
    clearBoards(secondBoard)
}

startBtn.addEventListener("click", () => {
    startGame()
    // console.log(player.board.grid)
    // console.log(aiPlayer.board.grid)
})

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