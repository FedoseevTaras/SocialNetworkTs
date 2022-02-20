import {ActionsTypes, ProfilePageType} from "./store";



const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";

let initialState = {

    posts: [
        {id: 1, message: "Hi how are you", likesCount: 11},
        {id: 2, message: "It's my first message", likesCount: 12},
    ],
        newPostText: ""

}

export const profileReducer = (state:ProfilePageType=initialState,action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            break;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            break;
    }
    return state
}

export let addPostActionCreator = ()=> {
    return {
        type: ADD_POST
    } as const
}
export const UpdateNewPostTextActionCreator = (text:string)=> {
    return {
        type : UPDATE_NEW_POST, newText : text
    } as const
}