import React from 'react'

function NavBarChild(props) {
  return (
    <form>
                <label htmlFor='username'>Username: </label>
                <input type='text' placeholder='username' id='username'/>
                <label htmlFor='password'>Password: </label>
                <input type='password' placeholder='password'  id='password'/>
                <button onClick={props.handleClick}>Submit</button>
            </form>
  )
}

export default NavBarChild