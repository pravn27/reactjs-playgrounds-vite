const Counter = ({ count, btnClickHandler }) => {
  return (
    <div>
      <button onClick={btnClickHandler}>Increment {count} </button>
    </div>
  );
};

export default Counter;
