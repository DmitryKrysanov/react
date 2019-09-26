import React, { Component } from 'react';

const Profile = () => {
    return (
        <div className="content">
          <img className="banner" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B4%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D1%89%D0%B5_%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%9F%D0%B0%D0%BD%D0%B0%D1%80%D0%B0%D0%BC%D0%B0_2.jpg/799px-%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5_%D0%B2%D0%BE%D0%B4%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D0%BB%D0%B8%D1%89%D0%B5_%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C_%D0%9F%D0%B0%D0%BD%D0%B0%D1%80%D0%B0%D0%BC%D0%B0_2.jpg"/>
          <div className="user-info">
            <img className="avatar" src="https://cdn.auth0.com/blog/es6rundown/logo.png"/>
            <div className="info">
              <h3>Dmitry K.</h3>
              <ul>
                <li>Date of Birth: 2 january</li>
                <li>City: Minsk</li>
                <li>Education: BSU '11</li>
                <li>Web Site: https://it-kamasutra.com</li>
              </ul>
            </div>
          </div>
          <div className="my-posts">
            My posts
            <div>
              New post
            {/* <form method="post" action="#">
              <input type="text">your news...</input>
              <button>Send</button>
            </form> */}
            </div>
            <div>
              <div>Post 1</div>
              <div>Post 2</div>
            </div>
          </div>
        </div>
    )
}

export default Profile;