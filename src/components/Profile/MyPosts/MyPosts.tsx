import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = () => {
    return (
            <div>
                MyPosts
                <div>
                    <textarea></textarea>
                    <button>Add</button>
                    <button>Delete</button>
                </div>
                <div>
                    <Post message = "Hi how are you"/>
                    <Post message = "It's my first message"/>
                </div>
            </div>
    );
};

export default MyPosts;