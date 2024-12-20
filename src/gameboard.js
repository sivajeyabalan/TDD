// src/gameboard.js
class Gameboard {
  constructor() {
    // Initialize a 10x10 board filled with null values
    this.board = Array(10).fill().map(() => Array(10).fill(null));
    this.missedShots = [];
    this.ships = [];
  }

  placeShip(x, y, length, direction, ship) {
    // Check if ship can be placed at the given coordinates
    if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        if (x + i >= 10 || y >= 10 || this.board[y][x + i] !== null) {
          throw new Error('Invalid position or ship overlaps');
        }
      }
      // Place the ship
      for (let i = 0; i < length; i++) {
        this.board[y][x + i] = ship;
      }
    } else if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        if (x >= 10 || y + i >= 10 || this.board[y + i][x] !== null) {
          throw new Error('Invalid position or ship overlaps');
        }
      }
      // Place the ship
      for (let i = 0; i < length; i++) {
        this.board[y + i][x] = ship;
      }
    }
    // Add the ship to the list of ships
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    // Check if the attack hits a ship
    if (this.board[y][x] !== null) {
      const ship = this.board[y][x];
      ship.hit();  // Mark the ship as hit
      return true;
    } else {
      this.missedShots.push([x, y]);  // Record missed shot
      return false;
    }
  }

  allShipsSunk() {
    // Check if all ships are sunk
    return this.ships.every(ship => ship.isSunk());
  }

  getMissedShots() {
    // Return the list of missed shots
    return this.missedShots;
  }
}

export default Gameboard;
