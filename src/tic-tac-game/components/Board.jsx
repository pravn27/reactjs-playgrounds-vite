import Square from "./Square.jsx";

const Board = ({ xIsNext, squares, onPlay }) => {
  const onSquareClickHandler = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return; // Ignore click if square is already filled
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onPlay(nextSquares); // Call the onPlay function to update the game state
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
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

// Function to calculate the winner of the Tic Tac Toe game
function calculateWinner(squares) {
  // possible winning combinations in squares 3*3 grid
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
