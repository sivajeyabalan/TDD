import Gameboard from './gameboard';  // Import the Gameboard class

// Player class
class Player {
  constructor(name, type) {
    this.name = name;     // Name of the player
    this.type = type;     // Type of the player ('real' or 'computer')
    this.gameboard = new Gameboard();  // Each player has their own gameboard
  }

  // A method to place ships on the player's gameboard
  placeShip(x, y, length, direction) {
    this.gameboard.placeShip(x, y, length, direction);
  }

  // Method to receive attack (hit or miss)
  receiveAttack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }

  // Method to check if all ships are sunk
  allShipsSunk() {
    return this.gameboard.allShipsSunk();
  }

  // Additional methods can be added to handle player actions
}

export default Player;
