import React from 'react';
import classes from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={classes.item}>
           <img className={classes.avatar} src={props.avatar} />
            {props.name}
        </div>
    )
}

export default FriendItem;