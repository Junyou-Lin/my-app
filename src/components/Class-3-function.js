import React from "react";
const Greeting = (props) => {
  const handleClick = () => {
    console.log("=========");
  };

  return <button onClick={handleClick}></button>;
};
