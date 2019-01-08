import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";
import * as mutations from "./graphql/mutations";
import React, { Component } from "react";
import { Connect } from "aws-amplify-react";
import { API, graphqlOperation } from "aws-amplify";
import ListView from "./TodoView";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      test: "nothing"
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleDelete = async todo => {
    await API.graphql(
      graphqlOperation(mutations.deleteTodo, { input: { id: todo.id } })
    );
    this.handleQuery();
  };

  handleQuery = async event => {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    this.setState({ items: allTodos.data.listTodos.items });
    console.log(this.state);
  };

  componentDidMount = async event => {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    this.setState({ items: allTodos.data.listTodos.items });
    console.log(this.state);
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <TodoForm onCreate={this.handleQuery} />
        <ListView items={items} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default TodoList;
