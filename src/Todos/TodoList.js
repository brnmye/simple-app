import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import ListView from "./TodoView";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      test: "nothing",
      formOn: false
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

  handleForm = () => {
    this.setState({ formOn: !this.state.formOn });
  };

  render() {
    const { items } = this.state;
    const CreateForm = props => {
      const formOn = props.formOn;
      if (formOn) {
        return (
          <div>
            <TodoForm onCreate={this.handleQuery} />
            <button onClick={this.handleForm}>Cancel</button>
          </div>
        );
      } else {
        return <button onClick={this.handleForm}>Create Todo</button>;
      }
    };
    return (
      <div className="App">
        <CreateForm formOn={this.state.formOn} />
        <div className="border w-50 mx-auto">
          <ListView items={items} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default TodoList;
