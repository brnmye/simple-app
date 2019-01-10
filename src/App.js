import React, { Component } from "react";
import aws_exports from "./aws-exports";
import NavBarPage from "./NavBar";
import { withAuthenticator } from "aws-amplify-react";
import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import TodoList from "./Todos/TodoList";
import { Route } from "react-router-dom";
import Home from "./Home";
import Audio from "./Audio";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/TodoList" component={TodoList} />
          <Route exact path="/Audio" component={Audio} />
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
