import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let DialogsElements = props.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />) 

    let MessagesElements = props.messages
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