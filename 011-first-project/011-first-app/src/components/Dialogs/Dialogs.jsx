import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

let DialogsData = [
    {id: 1, name: 'Dima'}, 
    {id: 2, name: 'Andrey'}, 
    {id: 3, name: 'Oleg'}, 
    {id: 4, name: 'Sveta'}
]

let MessagesData = [
    {id: 1, message: 'Hello, my friend'}, 
    {id: 2, message: 'How are you?'}, 
    {id: 3, message: "I don't care"}
]


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
            </div>
            <div className={classes.messages}>
                <Message message={MessagesData[0].message} id={MessagesData[0].id} />
                <Message message={MessagesData[1].message} id={MessagesData[1].id} />
                <Message message={MessagesData[2].message} id={MessagesData[2].id} />
        </div>
        </div>
        
    )
}

export default Dialogs;