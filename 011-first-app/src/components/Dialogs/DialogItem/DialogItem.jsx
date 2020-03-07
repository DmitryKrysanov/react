import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <img className={classes.avatar} src={props.avatar} />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;