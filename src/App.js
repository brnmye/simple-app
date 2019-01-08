import React, { Component } from "react";
import aws_exports from "./aws-exports";
import NavBarPage from "./NavBar";
import { withAuthenticator } from "aws-amplify-react";
import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import TodoList from "./Todos/TodoList";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    let styles = {
      border: "10px solid black "
    };
    return (
      <div className="App">
        <div style={styles}>
          <NavBarPage />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
