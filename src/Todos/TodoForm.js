import * as mutations from "../graphql/mutations";
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const todoDetails = {
      name: this.state.name,
      description: this.state.description
    };

    await API.graphql(
      graphqlOperation(mutations.createTodo, { input: todoDetails })
    );
    const { onCreate } = this.props;
    //
    onCreate();

    this.setState({ name: "", description: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              placeholder={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
