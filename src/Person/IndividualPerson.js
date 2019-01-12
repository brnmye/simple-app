import React, { Component } from "react";
import * as queries from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import PostForm from "./PostForm/PostForm";

class IndividualPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery = async event => {
    const aPerson = await API.graphql(
      graphqlOperation(queries.getPerson, {
        id: this.props.location.pathname.slice(8)
      })
    );
    this.setState({ person: aPerson.data.getPerson });
    //console.log(this.state);
    //console.log(this.props.location.pathname.slice(8));
  };

  componentDidMount() {
    this.handleQuery();
  }
  render() {
    return (
      <div>
        <h1>{this.state.person.name}</h1>
        <h2>{this.state.person.age}</h2>
        <PostForm thisUser={this.state.person} />
      </div>
    );
  }
}

export default IndividualPerson;
