import React from "react";

class ClockV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      console.log("====interval==");
      this.setState({ time: new Date()});

      // this.setState(() => {
      //   return { time: new Date() };
      // });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    console.log("redner");
    return <div>current time is {this.state.time.toLocaleTimeString()}</div>;
  }
}

export default ClockV1;
