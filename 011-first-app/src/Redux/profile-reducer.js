const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi! How are you?', likesCount: 10 },
        { id: 2, message: "It's my first post", likesCount: 23 },
        { id: 3, message: "Hello", likesCount: 1 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: 
        return {
            ...state, 
            newPostText: '',
            postsData: [...state.postsData, {id: 5,message: state.newPostText,likesCount: 0}]
        };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;
