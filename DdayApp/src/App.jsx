import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div id="heading">
        <h1>Heading here!</h1>
      </div>
      <section id="counter">
        <Counter
          onSelect={handleClick}
          counterValue={count}
          onDecrement={handleDecrement}
        ></Counter>
      </section>
    </>
  );
}

export default App;
