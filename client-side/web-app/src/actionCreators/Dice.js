import { DICE_ROLL, RESET_ROLL } from '../constants/ActionTypes';

export function diceRoll(diceValue) {
  return { type: DICE_ROLL, roll: Math.floor(Math.random() * diceValue) + 1, dice: diceValue };
}

export function resetRoll() {
  return { type: RESET_ROLL };
}
