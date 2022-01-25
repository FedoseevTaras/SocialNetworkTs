import {rerenderEntireTree} from "../render";

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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages :Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state:RootStateType = {
    profilePage : {
        posts: [
            {id: 1, message: "Hi how are you", likesCount: 11},
            {id: 2, message: "It's my first message", likesCount: 12},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Taras"  },
            {id: 2, name: "Victor"  },
            {id: 3, name: "Andrey"  },
            {id: 4, name: "Petya"  },
            {id: 5, name: "Vasya"  },
            {id: 6, name: "Stepan"  },
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:2, message: 'How is your it-kamasutra'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Yo'},
            {id:5, message: 'Yo'},
            {id:6, message: 'Yo'},
            {id:7, message: 'Yo'},
        ]
    }
}

export let addPost = (posMessage:string) => {
    let newPost = {
        id: 5,
        message: posMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state