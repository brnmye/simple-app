import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import PersonView from "./PersonView";

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      persons: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleDelete = async person => {
    await API.graphql(
      graphqlOperation(mutations.deletePerson, { input: { id: person.id } })
    );
    this.handleQuery();
  };
  handleQuery = async event => {
    const allPersons = await API.graphql(graphqlOperation(queries.listPersons));
    this.setState({ persons: allPersons.data.listPersons.items });
    console.log(this.state.persons);
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const personDetails = {
      name: this.state.name,
      age: this.state.age
    };

    const newPerson = await API.graphql(
      graphqlOperation(mutations.createPerson, { input: personDetails })
    );
    this.handleQuery();

    this.setState({ name: "", age: "" });
  };
  componentDidMount() {
    this.handleQuery();
  }

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
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input
              name="age"
              type="text"
              value={this.state.age}
              placeholder="Age"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <PersonView persons={this.state.persons} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default PersonForm;
//
