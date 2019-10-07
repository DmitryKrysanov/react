import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let dialogsElements = props.state.dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />) 

    let messagesElements = props.state.messagesData
    .map( message => <Message message={message.message} id={message.id} /> )

    let newMessageElement = React.createRef();

    let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);

        // console.log(action);
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
                <div className={classes.button} onClick={sendMessage}>
                    <h4>Send</h4>
                </div>
            </div>
        </div>
            
        </div>
        
    )
}

export default Dialogs;