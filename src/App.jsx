import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  const btnClickHandler = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Button clicked");
  };

  return (
    <>
      <h1>Welcome to React</h1>
      <Counter count={count} btnClickHandler={btnClickHandler} />
      <Counter count={count} btnClickHandler={btnClickHandler} />
    </>
  );
}

export default App;
