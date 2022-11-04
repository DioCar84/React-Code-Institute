import React, { Component } from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return {
        isLoggedIn: prevState.isLoggedIn === true ? false : true,
      };
    });
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <form>
            <label>Username:</label>
            <input placeholder="username"></input>
            <label>Password:</label>
            <input placeholder="password"></input>
            <button onClick={this.handleClick}>Submit</button>
            
          </form>
        ) : (
          <button onClick={this.handleClick}>Login</button>
        )}
      </div>
    );
  }
}

export default NavBarForm;
