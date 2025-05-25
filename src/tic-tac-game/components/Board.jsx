import { useState } from "react";
import Square from "./Square.jsx";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onSquareClickHandler = (index) => {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  };

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClickHandler={() => onSquareClickHandler(0)}
        />
        <Square
          value={squares[1]}
          onSquareClickHandler={() => onSquareClickHandler(1)}
        />
        <Square
          value={squares[2]}
          onSquareClickHandler={() => onSquareClickHandler(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClickHandler={() => onSquareClickHandler(3)}
        />
        <Square
          value={squares[4]}
          onSquareClickHandler={() => onSquareClickHandler(4)}
        />
        <Square
          value={squares[5]}
          onSquareClickHandler={() => onSquareClickHandler(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClickHandler={() => onSquareClickHandler(6)}
        />
        <Square
          value={squares[7]}
          onSquareClickHandler={() => onSquareClickHandler(7)}
        />
        <Square
          value={squares[8]}
          onSquareClickHandler={() => onSquareClickHandler(8)}
        />
      </div>
    </>
  );
};

export default Board;
