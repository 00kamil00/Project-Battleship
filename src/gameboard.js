import { Ship } from "./ship.js"

class Gameboard {
    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null))
        this.missedAttacks = []
        this.hitAttacks = []
        this.ships = []
    }

    placeShip(length, x, y, direction = 'horizontal') {
        const newShip = new Ship(length)
        for (let i = 0; i < length; i++) {
            if (direction === 'horizontal') {
                this.grid[y][x + i] = newShip
            } else if (direction === 'vertical') {
                this.grid[y + i][x] = newShip
            }
        }
        this.ships.push(newShip)
    }

    receiveAttack(x, y) {
        const isAlreadyMissed = this.missedAttacks.some(attack => {
            return attack[0] === x && attack[1] === y
        })

        const isAlreadyHitted = this.hitAttacks.some(attack => {
            return attack[0] === x && attack[1] === y
        })

        if (isAlreadyMissed || isAlreadyHitted) return

        if (this.grid[y][x] !== null) {
            this.grid[y][x].hit()
            this.hitAttacks.push([x, y])
        } else {
            this.missedAttacks.push([x, y])
        }
    }

    allShipsSunk() {
        for (const ship of this.ships) {
            if (!ship.isSunk()) {
                return false
            }
        }
        return true
    }
}



export { Gameboard }