import React from "react";
const heros = ["foo", "bar", "war"];

const HeroList = (props) => (
  <ul>
    {heros.map((hero, index) => (
      <li key={index}>{hero}</li>
    ))}
  </ul>
);

export default HeroList;
