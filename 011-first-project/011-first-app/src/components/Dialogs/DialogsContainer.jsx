import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} 
        onSendMessage={sendMessage}
        newMessageText={state.messagesPage.newMessageText}
        dialogs={state.messagesPage.dialogsData}
        messages={state.messagesPage.messagesData}/>
        
    )
}

export default DialogsContainer;