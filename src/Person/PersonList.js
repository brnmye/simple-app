import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import PersonForm from "./PersonForm";

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery = async event => {
    const allTodos = await API.graphql(graphqlOperation(queries.listTodos));
    this.setState({ items: allTodos.data.listTodos.items });
    console.log(this.state);
  };

  componentDidMount = async event => {
    const allPersons = await API.graphql(graphqlOperation(queries.listPersons));
    //this.setState({ items: allPersons.data.listTodos.items });
    //console.log(this.state);
  };

  render() {
    const { persons } = this.state;
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
      <div>
        <CreateForm formOn={this.state.formOn} />
        <div className='className="border w-50 mx-auto'>
          <ListView items={items} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default PersonList;
