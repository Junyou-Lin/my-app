import React from "react";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log("=======");
  };

  redner() {
    return <button onClick={this.handleClick}></button>;
  }
}
export default Greeting;
