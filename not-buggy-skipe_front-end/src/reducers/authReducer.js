import { LOGIN, LOGOUT, SIGN_UP, GET_USER_INFO } from '../actions/types'

const defaultState = {
    isSignedIn: false,
    currentUser: null,
    loginError: null,
    jwtToken: null,
}

export default (state = defaultState, action) => {
    let { jwt, user } = action.payload || ""

    switch(action.type) {
        case LOGIN:
            return { 
                ...state,
                currentUser: user,
                jwtToken: jwt,
                isSignedIn: true
            };
        case LOGOUT:
            return { ...defaultState };
        case SIGN_UP:
            return {
                ...state,
                currentUser: user,
                jwtToken: jwt,
                isSignedIn: true
            };
        case GET_USER_INFO:
            return { 
                ...state,
                currentUser: action.payload,
                jwtToken: localStorage.token,
                isSignedIn: true
            };
        default:
            return state;
    }
}