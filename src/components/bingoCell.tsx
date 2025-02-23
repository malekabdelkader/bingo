import { useState } from "react";

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
      <p className="text-xs">
        {phrase}
      </p>

      {cell && stampPosition && (
        <div
          className="absolute bg-rose-300 opacity-70 rounded-full z-30"
          style={{
            width: "110%",
            height: "110%",
            top: `${stampPosition.y}px`,
            left: `${stampPosition.x}px`,
            transform: "translate(-50%, -50%)",
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
