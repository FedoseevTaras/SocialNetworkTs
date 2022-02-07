import React, {ChangeEvent, ChangeEventHandler, RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    debugger
    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;