import { Gameboard } from "./gameboard.js"

class Player {
    constructor(type = 'human') {
        this.board = new Gameboard()
        this.type = type
    }

    attack(gameboard, x, y) {
        gameboard.receiveAttack(x, y)
    }

    randomAttack(enemyBoard) {
        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        enemyBoard.receiveAttack(x, y)
    }
}



export { Player }