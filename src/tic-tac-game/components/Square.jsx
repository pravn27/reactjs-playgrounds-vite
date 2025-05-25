const Square = ({ value, onSquareClickHandler }) => {
  return (
    <>
      <button className="square" onClick={onSquareClickHandler}>
        {value}
      </button>
    </>
  );
};

export default Square;
