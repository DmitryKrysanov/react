import React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem';

const Navbar = (props) => {

  let friendsElement = props.state.map(friend => <FriendItem avatar={friend.avatar} name={friend.name} />)

  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li><NavLink activeClassName={classes.active} to="/profile">Profile</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/news'>News</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></li>
        </ul>
      </nav>
      <div className={classes.friends}>
        <h3>Friends</h3>
        <div className={classes.friendsList}>
          {friendsElement}
        </div>
      </div>
    </div>
  )
}

//multiple classes: className={`${classes.nav} ${classes.active}`}

export default Navbar;