import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

class NavBarForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoggedIn: true,
      }
    }

    handleClick = () => {
        this.setState((prevState) => ({isLoggedIn: !prevState.isLoggedIn}))
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
            < NavBarChild handleClick={this.handleClick}/>
        ) : 
        (
            <div>
                <button onClick={this.handleClick}>Login</button>
            </div>
            
            )}
        
      </div>
    )
  }
}

export default NavBarForm