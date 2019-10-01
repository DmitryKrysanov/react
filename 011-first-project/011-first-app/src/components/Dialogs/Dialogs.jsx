import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

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

    let DialogsElements = DialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />) 

    let MessagesElements = MessagesData
    .map( message => <Message message={message.message} id={message.id} /> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MessagesElements}
        </div>
        </div>
        
    )
}

export default Dialogs;