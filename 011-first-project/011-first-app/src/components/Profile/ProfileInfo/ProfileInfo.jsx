import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfo}>
            <img className={classes.avatar} src="https://cdn.auth0.com/blog/es6rundown/logo.png"/>
            <div className={classes.info}>
              <h3>Dmitry K.</h3>
              <ul>
                <li>Date of Birth: 2 january</li>
                <li>City: Minsk</li>
                <li>Education: BSU '11</li>
                <li>Web Site: https://it-kamasutra.com</li>
              </ul>
            </div>
          </div>
    )
}

export default ProfileInfo;