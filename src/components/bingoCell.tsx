import { useRef, useState } from "react";
import stampImage from "../assets/stamp.png";
export default function BingoCell({
  rowIndex,
  colIndex,
  handleCellClick,
  cell,
  phrase,
  isCenter,
}: IProps) {
  const [stampPosition, setStampPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const rotation = useRef(Math.floor(Math.random() * 9) * 40); 

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setStampPosition({ x: offsetX, y: offsetY });
    handleCellClick(rowIndex, colIndex);
  };

  return (
    <div
      className={`relative p-2 min-h-12 min-w-12 max-h-24 max-w-24 aspect-square flex items-center justify-center border cursor-pointer 
    rounded-xl text-center font-semibold leading-tight text-black
    ${cell ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"}
    ${isCenter && "bg-rose-300"}
  `}
      onClick={handleClick}
    >
      <p className="text-xs">{phrase}</p>

      {cell && stampPosition && (
        <img
          src={stampImage}
          alt="marker stamp image"
          className="absolute opacity-70 rounded-full z-30 w-[110%] h-[110%]  transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${stampPosition.y}px`,
            left: `${stampPosition.x}px`,
            transform: `rotate(${rotation.current}deg)`,
          }}
        />
      )}
    </div>
  );
}

interface IProps {
  rowIndex: number;
  colIndex: number;
  handleCellClick: (row: number, col: number) => void;
  cell: boolean;
  phrase: string;
  isCenter: boolean;
}
