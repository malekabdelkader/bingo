import Confetti from "react-confetti";
import bingoImage from '../assets/Bingo-PNG-HD.png'; // Relative path to the image

type IProps = {
  bingoResult: string | undefined;
  handleClickReplay: () => void;
};

export default function ResultContainer({
  bingoResult,
  handleClickReplay,
}: IProps) {
  if (!bingoResult) return null;

  return (
    <div className="fixed top-0 left-0 min-w-full min-h-full Bingoo bg-opacity-75 flex items-center justify-center z-50">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        gravity={0.2}
        recycle={true}
      />

      <div className="bg-transparent text-center max-w-lg w-full">
        <div className="mb-6">
          <img
            src={bingoImage}
            alt="Trail Bingo"
            className="w-full max-w-xs mx-auto"
          />
        </div>

        <button
          onClick={handleClickReplay}
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow-md transition"
        >
          Replay
        </button>
      </div>
    </div>
  );
}
