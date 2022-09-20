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
      }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({
          isLoaded: true,
        })
      }, 2000)
    }
    
  render() {
    return (
      <div>
        <div className={css.TitleBar}>My Photos</div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? 
          (savedPosts.map((post) => {
            return <div key={post.title}><PostItem post={post} className={css.SearchItem}/></div>
          })) : 
          (<Loader />)}
        </div>
    </div>
    )
  }
}

export default Content