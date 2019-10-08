import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
debugger;
    let dialogsElements = props.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />) 

    let messagesElements = props.messages
    .map( message => <Message message={message.message} id={message.id} /> )

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
    props.onSendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                <textarea 
                className={classes.textarea} 
                placeholder='Write a message...'
                ref={newMessageElement} 
                onChange={onMessageChange}>
                </textarea>
                <div className={classes.button} onClick={onSendMessage}>
                    <h4>Send</h4>
                </div>
            </div>
        </div>
            
        </div>
        
    )
}

export default Dialogs;