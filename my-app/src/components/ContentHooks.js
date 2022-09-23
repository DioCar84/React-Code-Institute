import React, {useState, useEffect} from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(!isLoaded);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const changeHandler = (event) => {
        const searchName = event.target.value.toLowerCase();
        let filteredPosts = savedPosts.filter((post) => post.name.toLowerCase().includes(searchName))
        setFetchedPosts(filteredPosts)
      }


  return (
    <div>
        <div className={css.Content}>
        <div className={css.TitleBar}>
          My Photos
          <form>
            <label htmlFor='searchInput'>Search:</label>
            <input onChange={changeHandler} type='search' id='searchInput' placeholder='By Author'/>
            <h4>posts found: {fetchedPosts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {isLoaded ? 
          (fetchedPosts.map((post) => {
            return <div key={post.title}><PostItem post={post} className={css.SearchItem}/></div>
          })) : 
          (<Loader />)}
        </div>
    </div>
    </div>
  )
}

export default ContentHooks