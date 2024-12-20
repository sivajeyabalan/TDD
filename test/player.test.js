import Player from '../src/player';
import Gameboard from '../src/gameboard';

jest.mock('../src/gameboard'); // Mock the Gameboard class

describe('Player class', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods
    Gameboard.mockClear();
  });

  test('should create a player with a gameboard', () => {
    const player = new Player('Player 1', 'real');
    expect(player.name).toBe('Player 1');
    expect(player.type).toBe('real');
    expect(Gameboard).toHaveBeenCalledTimes(1);
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test('should place a ship on the player’s gameboard', () => {
    const player = new Player('Player 1', 'real');
    const mockPlaceShip = jest.fn();
    player.gameboard.placeShip = mockPlaceShip;

    player.placeShip(0, 0, 3, 'horizontal');
    expect(mockPlaceShip).toHaveBeenCalledWith(0, 0, 3, 'horizontal');
  });

  test('should handle attacks on the player’s gameboard', () => {
    const player = new Player('Player 1', 'real');
    const mockReceiveAttack = jest.fn(() => true);
    player.gameboard.receiveAttack = mockReceiveAttack;

    const result = player.receiveAttack(5, 5);
    expect(mockReceiveAttack).toHaveBeenCalledWith(5, 5);
    expect(result).toBe(true);
  });

  test('should check if all ships are sunk', () => {
    const player = new Player('Player 1', 'real');
    const mockAllShipsSunk = jest.fn(() => false);
    player.gameboard.allShipsSunk = mockAllShipsSunk;

    const result = player.allShipsSunk();
    expect(mockAllShipsSunk).toHaveBeenCalled();
    expect(result).toBe(false);
  });

  test('should differentiate between real and computer players', () => {
    const realPlayer = new Player('Player 1', 'real');
    const computerPlayer = new Player('AI', 'computer');

    expect(realPlayer.type).toBe('real');
    expect(computerPlayer.type).toBe('computer');
  });
});
