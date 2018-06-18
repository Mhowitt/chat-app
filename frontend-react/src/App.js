import React, { Component } from "react";
import ChatBox from "./ChatBox";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>ChatterApp</h1>
        {/* <h1>Hi {this.state.messages}</h1> */}
        <ChatBox />
      </div>
    );
  }
}

export default App;
