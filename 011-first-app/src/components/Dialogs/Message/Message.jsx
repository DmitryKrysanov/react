import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>
            <img className={classes.avatar} src='http://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg' />
            {props.message}
        </div>
    )
}

export default Message;