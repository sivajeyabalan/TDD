import Ship from '../src/ship'; // Import Ship class

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3); // Correctly create an instance of Ship
  });

  test('can be hit and track hits', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('is sunk after enough hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
