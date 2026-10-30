import { Ship } from "./ship.js"

class Gameboard {
    constructor() {
        this.grid = Array.from({ length: 10 }, () => Array(10).fill(null))
        this.missedAttacks = []
        this.hitAttacks = []
        this.ships = []
    }

    placeShip(length, x, y, direction = 'horizontal') {
        if (direction === 'horizontal') {
            if (x + length > 10) {
                return false
            }
        } else if (direction === 'vertical') {
            if (y + length > 10) {
                return false
            }
        }

        for (let z = 0; z < length; z++) {
            if (direction === 'horizontal') {
                if (this.grid[y][x + z] !== null) {
                    return false
                }
            } else if (direction === 'vertical') {
                if (this.grid[y + z][x] !== null) {
                    return false
                }
            }
        }
        const newShip = new Ship(length)
        for (let i = 0; i < length; i++) {
            if (direction === 'horizontal') {
                this.grid[y][x + i] = newShip
            } else if (direction === 'vertical') {
                this.grid[y + i][x] = newShip
            }
        }
        this.ships.push(newShip)
        return true
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
            return true
        } else {
            this.missedAttacks.push([x, y])
            return false
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