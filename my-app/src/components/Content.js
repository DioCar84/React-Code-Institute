import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'

class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Photos</div>
        <div className={css.SearchResults}>{savedPosts.map((post) => {
            return <div key={post.title}><PostItem post={post} className={css.SearchItem}/></div>
        })}</div>
    </div>
    )
  }
}

export default Content