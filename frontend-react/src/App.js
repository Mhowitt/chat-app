import React, { Component } from "react";
// import axios from "axios";
import socketIOClient from "socket.io-client";
import ChatBox from "./ChatBox";

// const containerStyle = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   textAlign: "center",
//   backgroundColor: ""
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: `http://192.168.1.40:8000`,
      color: "white"
    };
  }
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("change color", this.state.color);
  };
  setColor = color => {
    this.setState({ color });
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("change color", col => {
      this.state.color = col;
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: this.state.color
        }}
      >
        <p>ChatterApp</p>
        {/* <h1>Hi {this.state.messages}</h1> */}
        <ChatBox />
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor("blue")}>
          Blue
        </button>
        <button id="red" onClick={() => this.setColor("red")}>
          Red
        </button>
      </div>
    );
  }
}

export default App;
