import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    };
  }

  componentDidMount(prevState) {
    this.fetchImages();
  }

  async fetchImages() {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
    );

    const fetchedPosts = response.data.hits;
    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
    })

    console.log(fetchedPosts)
  }

  handleNameChange = (e) => {
    const { value } = e.target;
    let filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });

    this.setState({
      posts: filteredPosts,
    });
  };

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input
              onChange={(e) => this.handleNameChange(e)}
              type="search"
              id="searchInput"
            />
            <h4>Posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {!this.state.isLoaded ? (
            <Loader />
          ) : (
            <PostItemAPI savedPosts={this.state.posts} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
