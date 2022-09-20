import React from 'react'

function PostItem(props) {
    const {post, className} = props;
  return (
    <div className={className}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt={post.name}/>
                <p>{post.description}</p>
            </div>
  )
}

export default PostItem