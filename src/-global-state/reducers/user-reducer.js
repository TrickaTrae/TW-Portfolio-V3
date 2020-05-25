import { UPDATE_USER } from "../actions";

const defaultState = {
    userLoading: true,
    userLoggedIn: false,
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                userLoading: action.payload.userLoading,
                userLoggedIn: action.payload.userLoggedIn
            }
        default: return state
    }
}

export default userReducer;