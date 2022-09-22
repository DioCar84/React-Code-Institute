import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
      }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          posts: savedPosts,
        })
      }, 2000)
    }

    changeHandler = (event) => {
      let {value} = event.target;
      const searchName = value.toLowerCase();
      let filteredPosts = savedPosts.filter((post) => post.name.toLowerCase().includes(searchName))
      this.setState({
        posts: filteredPosts
      })
    }
    
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          My Photos
          <form>
            <label htmlFor='searchInput'>Search:</label>
            <input onChange={this.changeHandler} type='search' id='searchInput' placeholder='By Author'/>
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? 
          (this.state.posts.map((post) => {
            return <div key={post.title}><PostItem post={post} className={css.SearchItem}/></div>
          })) : 
          (<Loader />)}
        </div>
    </div>
    )
  }
}

export default Content