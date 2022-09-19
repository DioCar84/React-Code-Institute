import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello, guest!',
            buttontext: 'log in',
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
                buttontext: prevState.buttontext === 'log in' ? 'log out' : 'log in'
            }    
        }, () => {
            console.log(this.state.message);
            console.log(this.state.buttontext);
        }) 
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>{this.state.message}</span>
        <button onClick={() => this.handleClick()}>{this.state.buttontext}</button>
      </div>
    )
  }
}

export default NavBarSimple