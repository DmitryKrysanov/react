import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";


let redusers = combineReducers({
    profilePage: profileReducer, 
    messagesPage: dialogsReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(redusers);

window.store = store;
export default store;