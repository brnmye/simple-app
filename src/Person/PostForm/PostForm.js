import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as moment from "moment";
import PostList from "./PostView";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      posts: [],
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery = async () => {
    const { thisUser } = this.props;
    try {
      await API.graphql(
        graphqlOperation(queries.getPerson, { id: thisUser.id })
      ).then(result => this.setPosts(result.data));
    } catch (e) {
      console.log("Caught it...");
    }
  };

  setPosts(results) {
    this.setState({ posts: results.getPerson.posts.items });
    this.setState({ loading: false });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ********** Mutating Submit for Post and Person ********************
  handleSubmit = async event => {
    const { thisUser } = this.props;
    event.preventDefault();
    const postDetails = {
      title: this.state.title,
      content: this.state.content,
      created_at: moment().format("MMMM Do YYYY, h:mm:ss a"),
      personPostsId: thisUser.id
    };
    const newPost = await API.graphql(
      graphqlOperation(mutations.createPost, { input: postDetails })
    );

    this.setState({ title: "", content: "" });
    this.handleQuery();
  };

  componentWillMount() {
    this.handleQuery();
  }

  // **************** Render Area ************************
  render() {
    if (this.state.loading) {
      this.handleQuery();
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Content:
            <input
              name="content"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleQuery}>Press for Query</button>

        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default PostForm;
//<PostList posts={this.state.posts} />
