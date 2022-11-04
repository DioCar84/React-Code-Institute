import React from 'react'
import css from "./css/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
        <div className={css.sidebar}>
            <a>My Photos</a>
            <a>My Illustrations</a>
            <a>My Paintings</a>
        </div>
    </div>
  )
}

export default Sidebar;
