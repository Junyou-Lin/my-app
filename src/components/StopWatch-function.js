import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timer = useRef();
  const onStart = () => {
    timer.current = setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1);
  };

  const onStop = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
