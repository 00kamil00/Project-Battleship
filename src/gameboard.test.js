import { Gameboard } from "./gameboard.js";


test('can place a ship at specific coordinates', () => {
    const board = new Gameboard()
    board.placeShip(3, 0, 0)
    expect(board.grid[0][0]).not.toBeNull()
})

test('a ship of length 3 occupies consecutive horizontal cells', () => {
    const board = new Gameboard()
    board.placeShip(2, 5, 3)
    expect(board.grid[3][5]).not.toBeNull()
    expect(board.grid[3][6]).toBe(board.grid[3][5])
    expect(board.grid[3][7]).toBeNull()
})

test('a successful hit damages the ship', () => {
    const board = new Gameboard()
    board.placeShip(3, 0, 0)
    board.receiveAttack(0, 0)
    expect(board.grid[0][0].hits).toBe(1)
})
