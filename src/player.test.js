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

test('AI player makes a random attack on enemy board', () => {
    const aiPlayer = new Player('ai')
    const enemyBoard = new Gameboard()
    aiPlayer.randomAttack(enemyBoard)
    const totalAttacks = enemyBoard.missedAttacks.length + enemyBoard.hitAttacks.length
    expect(totalAttacks).toBe(1)
})

test('AI player makes a unique attack on enemy board', () => {
    const aiPlayer = new Player('ai')
    const enemyBoard = new Gameboard()
    for (let i = 0; i < 100; i++) {
        aiPlayer.randomAttack(enemyBoard)
    }
    const totalAttacks = enemyBoard.missedAttacks.length + enemyBoard.hitAttacks.length
    expect(totalAttacks).toBe(100)
})