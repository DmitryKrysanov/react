import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsCantainer = (props) => {
debugger
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    // let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (<MyPosts updateNewPostText={onPostChange}
    onAddPost={addPost}
    posts={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText} />)
}

export default MyPostsCantainer;