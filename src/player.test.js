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
