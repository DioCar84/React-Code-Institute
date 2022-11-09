import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import axios from "axios";
import API_KEY from "../secrets";

function ContentAPIHooks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
    );

    const fetchedPosts = response.data.hits;

    setIsLoaded(true);
    setPosts(fetchedPosts);
    setSavedPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleNameChange = (e) => {
    const { value } = e.target;
    let filteredPosts = savedPosts.filter((post) => {
      return post.user.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });

    setPosts(filteredPosts);
  };

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
        <h1>My Photos</h1>
        <form>
          <label htmlFor="searchInput">Search:</label>
          <input
            onChange={(e) => handleNameChange(e)}
            type="search"
            id="searchInput"
          />
          <h4>Posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={css.SearchResults}>
        {!isLoaded ? <Loader /> : <PostItemAPI savedPosts={posts} />}
      </div>
    </div>
  );
}

export default ContentAPIHooks;
