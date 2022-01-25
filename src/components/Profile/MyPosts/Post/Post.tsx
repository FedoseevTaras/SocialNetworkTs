import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    id:number
    message:string
    likesCount:number
}

const Post : React.FC<PostPropsType> = (props) => {

    return (
                    <div className = {s.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU" alt=""/>
                        {props.message}
                        <div><span>like{props.likesCount}</span></div>
                    </div>
    );
};

export default Post;