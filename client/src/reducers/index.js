import { combineReducers } from "redux";
import authReducer from "./auth";
// import posts from "./posts";
import postsReducer from './posts'

// console.log('posts -reducer-index', posts)
const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer
})

export default rootReducer;

// export default combineReducers({ posts: postsReducer });