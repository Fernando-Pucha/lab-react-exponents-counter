import "./App.css";
import { useState } from "react";

import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";


function App() {


  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
      <div className="counter-container">
        <p className="counter-value">{count}</p>
        <button className="counter-button" onClick={decrement}>-</button>
        <button className="counter-button" onClick={increment}>+</button>
      </div>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo etCount={count} />
        <ExponentThree etCount={count} />
        <ExponentFour etCount={count} />
        <ExponentFive etCount={count} />
        <ExponentSix etCount={count} />
      </div>

      <h2><em>Exponents Refactor</em></h2>
      <div className="container">
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>

    </div>
  );
}

export default App;
