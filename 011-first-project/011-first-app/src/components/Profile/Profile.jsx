import React from 'react';
import classes from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={classes.content}>
          <img className={classes.banner} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B4%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D1%89%D0%B5_%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%9F%D0%B0%D0%BD%D0%B0%D1%80%D0%B0%D0%BC%D0%B0_2.jpg/799px-%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B4%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D1%89%D0%B5_%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%9F%D0%B0%D0%BD%D0%B0%D1%80%D0%B0%D0%BC%D0%B0_2.jpg"/>
          <div className={classes.user_info}>
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
        <MyPosts />
        </div>
    )
}

export default Profile;