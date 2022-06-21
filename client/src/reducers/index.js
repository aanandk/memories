import { combineReducers } from "redux";
// import posts from "./posts";
import postsReducer from './posts'

// console.log('posts -reducer-index', posts)
const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer;

// export default combineReducers({ posts: postsReducer });