import React from "react";
import Card from "./components/Card";
import ClockV1 from "./components/ClockV1";
import ClockV2 from "./components/ClockV2";
import ClockV3 from "./components/ClockV3";
import ClockV4 from "./components/ClockV4";
import StopWatch from "./components/StopWatch-class";
// import StopWatch from "./components/StopWatch-function";
import Form from "./components/form.js";
import Status from "./components/Status.js";
import Weather from "./components/Weather";

export default function App() {
  return (
    <Weather />
    // <Status isOnline={true} />
    // <Card
    //   img="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I="
    //   title="Gifts For Him"
    //   subtitle="For valentine's day"
    // />
  );
}
