import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile : React.FC<ProfilePropsType> = (props) => {
    debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText = {props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;