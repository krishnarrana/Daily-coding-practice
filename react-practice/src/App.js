import React, { Component } from "react";
import PasswordRevealer from "./PasswordRevealer";
import Mailto from "./MailTo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordRevealer />
        <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">
          Mail me!
        </Mailto>
      </div>
    );
  }
}

export default App;
