import React, { useState, useEffect } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ fetchedPosts, setFetchedPosts ] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(!isLoaded);
      setFetchedPosts(savedPosts);
    }, 2000);
  }, []);

  const handleNameChange = (e) => {
    const { value } = e.target;
    let filteredPosts = savedPosts.filter((post) => {
      return post.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });

    setFetchedPosts(filteredPosts);
  };

  return (
    <div>
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
            <h4>Posts found: {fetchedPosts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {!isLoaded ? <Loader /> : <PostItem savedPosts={fetchedPosts} />}
        </div>
      </div>
    </div>
  );
}

export default ContentHooks;
