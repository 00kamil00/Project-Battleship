import { Gameboard } from "./gameboard.js"

class Player {
    constructor(type = 'human') {
        this.board = new Gameboard()
        this.type = type
    }

    attack(gameboard, x, y) {
        gameboard.receiveAttack(x, y)
    }
}



export { Player }