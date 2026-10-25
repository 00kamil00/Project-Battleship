import { Gameboard } from "./gameboard.js"

class Player {
    constructor(type = 'human') {
        this.board = new Gameboard()
        this.type = type
    }

    attack(gameboard, x, y) {
        return gameboard.receiveAttack(x, y)
    }

    randomAttack(enemyBoard) {
        let x = null
        let y = null
        while (true) {
            x = Math.floor(Math.random() * 10)
            y = Math.floor(Math.random() * 10)
            const isAlreadyMissed = enemyBoard.missedAttacks.some(attack => attack[0] === x && attack[1] === y)
            const isAlreadyHitted = enemyBoard.hitAttacks.some(attack => attack[0] === x && attack[1] === y)
            if (!isAlreadyMissed && !isAlreadyHitted) {
                break
            } 
        }
        enemyBoard.receiveAttack(x, y)
    }
}



export { Player }