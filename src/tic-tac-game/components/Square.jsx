import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const btnClickHandler = () => {
    setValue("X");
  };

  return (
    <>
      <button className="square" onClick={btnClickHandler}>
        {value}
      </button>
    </>
  );
};

export default Square;
