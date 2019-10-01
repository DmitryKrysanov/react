import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostsData = [
    {id: 1, message: 'Hi! How are you?', likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 23}
]

let DialogsData = [
    {id: 1, name: 'Dima'}, 
    {id: 2, name: 'Andrey'}, 
    {id: 3, name: 'Oleg'}, 
    {id: 4, name: 'Sveta'}
]

let MessagesData = [
    {id: 1, message: 'Hello, my friend'}, 
    {id: 2, message: 'How are you?'}, 
    {id: 3, message: "I don't care"},
    {id: 4, message: "Yo"}
]

ReactDOM.render(<App posts={PostsData} dialogs={DialogsData} messages={MessagesData} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
