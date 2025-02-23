import { GRID_SIZE } from "../constants";
import { cellsType } from "../types/bingoState";
import BingoCell from "./bingoCell";

type IProps = {
  cells: cellsType;
  handleCellClick: (row: number, col: number) => void;
  phrases: string[];
};
export default function BingoGrid({ cells, handleCellClick, phrases }: IProps) {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
      }}
      className={`grid gap-2 border-2 p-4`}
    >
      {cells?.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const phraseIndex = rowIndex * GRID_SIZE + colIndex;
          return (
            <BingoCell
              key={`bingo-cell-${rowIndex}-${colIndex}`}
              handleCellClick={handleCellClick}
              cell={cell}
              colIndex={colIndex}
              rowIndex={rowIndex}
              isCenter={
                rowIndex === Math.floor(GRID_SIZE / 2) &&
                colIndex === Math.floor(GRID_SIZE / 2)
              }
              phrase={phrases[phraseIndex]}
            />
          );
        })
      )}
    </div>
  );
}
