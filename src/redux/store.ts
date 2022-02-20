import {addPostActionCreator, profileReducer, UpdateNewPostTextActionCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody:string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type RootStoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch : (action: ActionsTypes) => void
}



export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>


const store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you", likesCount: 11},
                {id: 2, message: "It's my first message", likesCount: 12},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(state) {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }
}







export default store