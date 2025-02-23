import { useState } from "react";
import { GRID_SIZE } from "../constants";

export default function Instructions() {
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  return (
    <>
      {showInstructions && (
        <div className="flex flex-col m-auto float-right border-2 bg-amber-500 w-max p-7 relative">
          <span
            onClick={() => setShowInstructions(false)}
            className=" text-black font-extrabold top-1 right-2 absolute cursor-pointer"
          >
            x
          </span>
          <h1 className="m-4">How to play?</h1>
          <ul className="list-none pl-0 font-bold">
            <li className="flex items-center">
              <span className="mr-2 text-yellow-400">♣️</span> Center Cell always selected
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-400">♣️</span> Collect {GRID_SIZE} cells in a row to get a Bingo!
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-yellow-400">♣️</span> Diagonal Bingo is also accepted
            </li>
          </ul>
        </div>
      )}
      {showInstructions || (
        <span
          onClick={() => setShowInstructions(true)}
          className="bg-blue-500 border-2 font-serif border-l-0 px-2 absolute top-6 left-0 vibrate cursor-pointer"
        >
          i
        </span>
      )}
    </>
  );
}
