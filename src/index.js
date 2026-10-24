import "./styles.css"
import { createBoard } from "./ui.js"



const firstBoard = document.getElementById('first-board')
const secondBoard = document.getElementById('second-board')
createBoard(firstBoard)
createBoard(secondBoard)