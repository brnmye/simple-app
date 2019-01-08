import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import aws_exports from "./aws-exports";
import NavBarPage from "./NavBar";
import { withAuthenticator } from "aws-amplify-react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
