import { Ship } from './ship.js'


test('check length of the ship', () => {
    const testShip = new Ship(4)
    expect(testShip.length).toBe(4)
})

test('check if ship has been hit on start', () => {
    const testShip = new Ship(4)
    expect(testShip.hits).toBe(0)
})

test('check if ship has been hit', () => {
    const testShip = new Ship(4)
    testShip.hit()
    expect(testShip.hits).toBe(1)
})

test('check if ship is sunk or not', () => {
    const testShip = new Ship(4)
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(false)
})

test('check if ship is sunk', () => {
    const testShip = new Ship(4)
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true)
})
