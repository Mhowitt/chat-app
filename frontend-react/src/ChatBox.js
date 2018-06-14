import React, { Component } from "react";

const screenStyle = {
  height: "50vh",
  width: "25vw",
  backgroundColor: "beige",
  alignSelf: "center"
};

class ChatBox extends Component {
  render() {
    return (
      <div>
        <div className="screen__container" style={screenStyle} />
        <form action="">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default ChatBox;
