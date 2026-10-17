import { Ship } from "./ship.js"

class Gameboard {
    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null))
        this.missedAttacks = []
    }

    placeShip(length, x, y) {
        const newShip = new Ship(length)
        for (let i = 0; i < length; i++) {
            this.grid[y][x + i] = newShip
        }
    }

    receiveAttack(x, y) {
        if (this.grid[y][x] !== null) {
            this.grid[y][x].hit()
        } else {
            this.missedAttacks.push([x, y])
        }
    }
}



export { Gameboard }