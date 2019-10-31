import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsCantainer = (props) => {
// debugger
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     // let text = newPostElement.current.value;
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   }

//   return (<MyPosts updateNewPostText={onPostChange}
//     onAddPost={addPost}
//     posts={state.profilePage.postsData}
//     newPostText={state.profilePage.newPostText} />)
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDisparhToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    onAddPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsCantainer = connect(mapStateToProps, mapDisparhToProps)(MyPosts);

export default MyPostsCantainer;