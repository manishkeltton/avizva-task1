import React, { useState } from "react";
import Child from "./Child";
import "../App.css";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent UseState Render");
  return (
    <div className="container">
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Count - {count}
        </button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Count - 0</button>
      </div>
      <div>
        <button onClick={() => setCount(5)}>Count - 5</button>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
