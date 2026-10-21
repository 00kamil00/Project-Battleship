import { Player } from "./player.js"
import { Gameboard } from "./gameboard.js"


test('has its own gameboard', () => {
    const player = new Player()
    expect(player.board).toBeInstanceOf(Gameboard)
})