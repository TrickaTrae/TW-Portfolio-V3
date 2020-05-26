import { UPDATE_USER } from './index';

export const verifyUser = token => dispatch => {
    if(token) {
        fetch(process.env.REACT_APP_VERIFYUSERSESSION_URL + token).then(result => result.json()).then(json => {
            if(json.success === true) {
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        userLoading: false,
                        userLoggedIn: true
                    }
                })
            } else {
                localStorage.setItem("token", "");
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        userLoading: false,
                        userLoggedIn: false
                    }
                })
            }
        })
    } else {
        dispatch({
            type: UPDATE_USER,
            payload: {
                userLoading: false,
                userLoggedIn: false
            }
        })
    }
}

export const signoutUser = token => dispatch => {
    if(token) {
        fetch(process.env.REACT_APP_SIGNOUT_URL + token).then(response => response.json()).then(json => {
            alert(json.message);
            localStorage.setItem("token", "");
            dispatch({
                type: UPDATE_USER,
                payload: {
                    userLoading: false,
                    userLoggedIn: false
                }
            })
        })
    } else {
        dispatch({
            type: UPDATE_USER,
            payload: {
                userLoading: false,
                userLoggedIn: false
            }
        })
    }
}