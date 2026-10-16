import { Gameboard } from "./gameboard.js";


test('can place a ship at specific coordinates', () => {
    const board = new Gameboard()
    board.placeShip(3, 0, 0)
    expect(board.grid[0][0]).not.toBeNull()
})