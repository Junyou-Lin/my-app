import React from "react";
class StopWatch extends React.Component {
  state = {
    count: 0,
  };

  onStart = () => {
    this.timer = setInterval(() => {
      console.log(this.state.count);
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  onStop = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onStart}>Start</button>
        <button onClick={this.onStop}>Stop</button>
      </div>
    );
  }
}
export default StopWatch;
