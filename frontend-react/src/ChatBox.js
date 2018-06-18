import React, { Component } from "react";
// import axios from "axios";
import io from "socket.io-client";

const screenStyle = {
  height: "75vh",
  width: "50vw",
  backgroundColor: "white",
  alignSelf: "center",
  display: "flex",
  border: "1px solid black",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end"
};

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: []
    };

    const socket = io();

    socket.on("message_receive", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.onChangeHandle = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.sendMessage = event => {
      event.preventDefault();
      socket.emit("send_message", {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: "", username: "" });
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center"
        }}
      >
        <div className="screen__container" style={screenStyle}>
          <ul>
            {this.state.messages.map(message => {
              return <li>message.author: message.message</li>;
            })}
          </ul>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Put your username here"
            onChange={this.onChangeHandle}
          />
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.onChangeHandle}
            placeholder="Write a message here"
          />
          <button onClick={this.sendMessage}>Send Message</button>
        </div>
      </div>
    );
  }
}

export default ChatBox;
