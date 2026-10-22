import { Gameboard } from "./gameboard.js"

class Player {
    constructor(type = 'human') {
        this.board = new Gameboard()
        this.type = type
    }
}



export { Player }