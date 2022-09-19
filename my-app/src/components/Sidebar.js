import React from 'react';
import css from './css/Sidebar.module.css';

function Sidebar() {
  return (
    <div className={css.sidebar}>
        <a>My Photos</a>
        <a>My illustrations</a>
        <a>My Paintings</a>
    </div>
  )
}

export default Sidebar