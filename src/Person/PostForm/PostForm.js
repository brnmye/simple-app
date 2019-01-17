import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as moment from "moment";
import PostList from "./PostView";
import "./Post.css";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      posts: [],
      loading: true,
      toggle: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
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
    await API.graphql(
      graphqlOperation(mutations.createPost, { input: postDetails })
    );

    this.setState({ title: "", content: "" });
    this.handleQuery();
    this.handleToggle();
  };

  componentWillMount() {
    this.handleQuery();
  }

  // **************** Render Area ************************
  render() {
    if (this.state.loading) {
      this.handleQuery();
    }
    if (!this.state.toggle) {
      return (
        <div>
          <button onClick={this.handleToggle}>Create Post</button>{" "}
          <PostList
            className="create-post"
            posts={this.state.posts}
            loading={this.state.loading}
          />
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <br />
            <input
              name="title"
              className="title-box"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Content:
            <br />
            <textarea
              rows="4"
              cols="70"
              name="content"
              className="content-box"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
          <button onClick={this.handleToggle}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
//<PostList posts={this.state.posts} />
