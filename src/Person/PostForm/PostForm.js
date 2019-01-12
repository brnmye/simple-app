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

  handleQuery = async event => {
    const { thisUser } = this.props;
    const thisUserPosts = await API.graphql(
      graphqlOperation(queries.getPerson, { id: thisUser.id })
    );
    this.setState({ posts: thisUserPosts.data.getPerson.posts.items }, () => {
      this.setState({ loading: false });
    });
    //console.log(this.state.posts);
  };

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

  componentDidMount() {
    this.handleQuery();
  }

  // I LEFT OFF WITH FIRST LOAD OF PERSON DOESN't SHOW POSTS....

  // **************** Render Area ************************
  render() {
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
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <PostList posts={this.state.posts} />
        )}
      </div>
    );
  }
}

export default PostForm;
//<PostList posts={this.state.posts} />
