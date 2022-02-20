import {ActionsTypes, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const  SEND_MESSAGE= "SEND-MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: "Taras"},
        {id: 2, name: "Victor"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Petya"},
        {id: 5, name: "Vasya"},
        {id: 6, name: "Stepan"},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Yo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state:DialogsPageType = initialState,action:ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            break;
    }
    return state
}

export let sendMessageCreator = ()=> {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyCreator = (body:string)=> {
    return {
        type : UPDATE_NEW_MESSAGE_BODY, body : body
    } as const
}