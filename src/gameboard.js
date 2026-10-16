import { Ship } from "./ship.js"

class Gameboard {
    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null))
    }

    placeShip(length, x, y) {
        const newShip = new Ship(length)
        this.grid[y][x] = newShip
    }
}



export { Gameboard }