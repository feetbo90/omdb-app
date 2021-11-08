import { combineReducers } from "redux";
import posts from './post/reducer'
import detail from './details/reducer'
const rootReducer =  combineReducers({
    posts: posts,
    detail: detail
})
export default rootReducer