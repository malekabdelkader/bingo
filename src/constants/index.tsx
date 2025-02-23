import { bingStateType } from "../types/bingoState";
export const GRID_SIZE = 5; //must be impair
//FOR THIS GAME , SIZE WILL BE FIXED TO 5

export const INIT_BINGO_STATE = Array.from(
  { length: GRID_SIZE },
  (_, i) => i + 1
).reduce(
  (acc: bingStateType, el) => {
    const rowLabel = "R" + el;
    const colLabel = "C" + el;

    acc[rowLabel] = 0;
    acc[colLabel] = 0;

    if (el == Math.ceil(GRID_SIZE / 2)) {
      acc[rowLabel] = 1;
      acc[colLabel] = 1;
    }
    return acc;
  },
  { mainDiag: 1, antiDiag: 1 }
);

export const INIT_BINGO_CELLS  =()=>
  Array(GRID_SIZE)
    .fill(false)
    .map((_, i) => {
      const ThreeD = Array(GRID_SIZE).fill(false);
      const midArray = Math.ceil(GRID_SIZE / 2) - 1; // -1 fto remove the index 0 effect

      if (i == midArray) ThreeD[midArray] = true;

      return ThreeD;
    });
