import React from 'react';
import css from './css/Content.module.css';

function PostItem(props) {

  return (
    <div>
        {props.savedPosts.map((post) => {
            const {title, name, image, description} = post;
            return <div key={title} className={css.SearchItem}>
                <p>Title: {title}</p>
                <p>Artist: {name}</p>
                <img src={image}/>
                <p>Description: {description}</p>
            </div>;
          })}
    </div>
  )
}

export default PostItem