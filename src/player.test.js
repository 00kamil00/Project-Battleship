import { Player } from "./player.js"
import { Gameboard } from "./gameboard.js"


test('has its own gameboard', () => {
    const player = new Player()
    expect(player.board).toBeInstanceOf(Gameboard)
})

test('checks the player type', () => {
    const player = new Player()
    const aiPlayer = new Player('ai')
    expect(player.type).toBe('human')
    expect(aiPlayer.type).toBe('ai')
})

test('the player can attack enemy board', () => {
    const player = new Player()
    const enemyBoard = new Gameboard()
    player.attack(enemyBoard, 2, 3)
    expect(enemyBoard.missedAttacks).toHaveLength(1)
})