import { useState } from "react";
import Instructions from "./components/instructions";
import { bingStateType, cellsType } from "./types/bingoState";
import BingoGrid from "./components/bingoGrid";
import ResultContainer from "./components/resultContainer";
import { INIT_BINGO_STATE, INIT_BINGO_CELLS, GRID_SIZE } from "./constants";
import { PHRASES, shuffleArray } from "./constants/bingoPhrases";


export default function App() {
  const [cells, setCells] = useState<cellsType>(INIT_BINGO_CELLS());
  const [bingoState, setBingoState] = useState<bingStateType>({ ...INIT_BINGO_STATE });
  const [bingoResult, setBingoResult] = useState<string>();
  const [shuffledPhrases, setShuffledPhrases] = useState<string[]>(shuffleArray(PHRASES));

  const handleClickReplay = () => {
    setBingoResult(undefined);
    setBingoState({ ...INIT_BINGO_STATE });
    setCells(INIT_BINGO_CELLS());
    setShuffledPhrases(shuffleArray(PHRASES)); 
  };

  const handleCellClick = (row: number, col: number) => {
    // Prevent re-clicking or after game touch
    if (!cells || cells[row][col] || bingoResult) return; 

    const newMarked = [...cells];
    newMarked[row][col] = true;
    setCells(newMarked);

    const newBingoState = { ...bingoState };
    const rowLabel = "R" + (row + 1);
    const colLabel = "C" + (col + 1);
    // Update bingo tracker
    newBingoState[rowLabel]++;
    newBingoState[colLabel]++;
    if (row === col) newBingoState["mainDiag"]++;
    if (row + col === GRID_SIZE - 1) newBingoState["antiDiag"]++;

    setBingoState(newBingoState);
    let bingoCount = 0;
    // Check if Bingo is achieved
    for (const key in newBingoState) {
      if (newBingoState[key] >= GRID_SIZE) {
        bingoCount++;
      }
    }
    if (bingoCount) {
      setBingoResult("Bingo!");
    }
  };
  
  return (
    <div className="flex flex-row flex-wrap-reverse w-full absolute top-20">
      <div className=" m-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-rose-300">Bingo Game</h1>
        <BingoGrid cells={cells} handleCellClick={handleCellClick} phrases={shuffledPhrases}/>
        <ResultContainer
          bingoResult={bingoResult}
          handleClickReplay={handleClickReplay}
        />
      </div>
      <Instructions />
    </div>
  );
}



