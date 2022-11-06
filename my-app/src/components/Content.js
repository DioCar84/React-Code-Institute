import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
    };
  }

  componentDidMount(prevState) {
    setTimeout(() => {
      this.setState(
        {isLoaded: true,
        posts: savedPosts}) 
    }, 2000)
  }

  handleNameChange = (e) => {
    const {value} = e.target;
    let filteredPosts = savedPosts.filter(post => {
      return post.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })

    this.setState({
      posts: filteredPosts,
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input onChange={e => this.handleNameChange(e)} type='search' id="searchInput"/>
            <h4>Posts found: {this.state.posts.length}</h4>
          </form>
         
        </div>
        <div className={css.SearchResults}>
          {!this.state.isLoaded ? (
            <Loader />
          ) : (
            <PostItem savedPosts={this.state.posts} />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
