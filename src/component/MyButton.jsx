const MyButton = ({ name }) => {
  const btnClickHandler = (e) => {
    console.log("Button clicked", e);
  };

  return (
    <>
      <button className="btnClass" onClick={btnClickHandler}>
        {name}
      </button>
    </>
  );
};

export default MyButton;
