import Gameboard from '../src/gameboard';
import Ship from '../src/ship';

describe('Gameboard', () => {
  let gameboard;
  let ship;

  beforeEach(() => {
    gameboard = new Gameboard();  // Create a new gameboard before each test
    ship = new Ship(3);  // Create a new ship with length 3 before each test
  });

  test('Place ships on the board', () => {
    gameboard.placeShip(0, 0, 3, 'horizontal', ship);  // Place ship horizontally
    expect(gameboard.board[0][0]).toBe(ship);  // Expect the ship to be placed at (0, 0)
    expect(gameboard.board[0][1]).toBe(ship);  // Expect the ship to be placed at (0, 1)
    expect(gameboard.board[0][2]).toBe(ship);  // Expect the ship to be placed at (0, 2)
  });

  test('Receive attack hits a ship', () => {
    gameboard.placeShip(0, 0, 3, 'horizontal', ship);  // Place ship horizontally
    const result = gameboard.receiveAttack(0, 0);  // Attack position (0, 0)
    expect(result).toBe(true);  // The attack should hit the ship
    expect(ship.isSunk()).toBe(false);  // The ship should not be sunk after 1 hit
  });

  test('Receive attack records missed shots', () => {
    gameboard.placeShip(0, 0, 3, 'horizontal', ship);  // Place ship horizontally
    const result = gameboard.receiveAttack(5, 5);  // Attack position (5, 5), which should miss
    expect(result).toBe(false);  // The attack should miss
    expect(gameboard.getMissedShots()).toContainEqual([5, 5]);  // Missed shot should be recorded
  });

  test('All ships sunk returns true when all ships are sunk', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(2);
    gameboard.placeShip(0, 0, 3, 'horizontal', ship1);  // Place first ship
    gameboard.placeShip(0, 3, 2, 'vertical', ship2);  // Place second ship

    // Simulate attacks on all parts of the ships
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);  // Sink first ship

    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(0, 4);  // Sink second ship

    expect(gameboard.allShipsSunk()).toBe(true);  // All ships should be sunk now
  });

  test('All ships sunk returns false when not all ships are sunk', () => {
    const ship1 = new Ship(3);
    gameboard.placeShip(0, 0, 3, 'horizontal', ship1);  // Place one ship

    // Simulate attacks on part of the ship but not sinking it
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);

    expect(gameboard.allShipsSunk()).toBe(false);  // The ship should not be sunk yet
  });
});
