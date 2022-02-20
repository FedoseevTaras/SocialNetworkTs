import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogsPageType, RootStoreType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: RootStoreType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id}/>)
    let messagesElement = state.messages.map(m => <Message message= {m.message} id = {m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value = {newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder= "Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick }>Send</button></div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;