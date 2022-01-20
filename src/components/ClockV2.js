import React, { useState, useEffect } from "react";

const ClockV2 = () => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setState(new Date());
    }, 1000);
    return () => {
      console.log("clean up function");
    };
  }, []);

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return <div>current time is {state.toLocaleTimeString()}</div>;
};

export default ClockV2;
