import { UPDATE_POSTS } from "../actions";

const defaultState = {
    posts: []
}

const blogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        default: return state
    }
}

export default blogReducer;