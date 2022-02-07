import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from './redux/state'


export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(<App state = {state} addPost={addPost} updateNewPostText = {updateNewPostText}/>, document.getElementById('root'));
}



rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
