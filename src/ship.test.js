import { Ship } from './ship.js'


test('check length of the ship', () => {
    const testShip = new Ship(4)
    expect(testShip.length).toBe(4)
})