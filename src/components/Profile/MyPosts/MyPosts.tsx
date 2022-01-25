import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPost:string) => void
}
const MyPosts : React.FC<MyPostsPropsType> = (props) => {
debugger
    let postsElements = props.posts.map ( p => <Post id= {p.id} message = {p.message} likesCount = {p.likesCount} />)

    let newPostElement =  React.createRef<HTMLTextAreaElement> ();

    let addPost = () => {
        if (newPostElement.current){
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ""
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
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