import { LOGIN, LOGOUT, SIGN_UP } from '../actions/types'

const defaultState = {
    isSignedIn: false,
    currentUser: null,
    loginError: null,
    jwtToken: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            const { jwt, user } = action.payload
            return { 
                ...state,
                currentUser: user,
                jwtToken: jwt,
                isSignedIn: true
            };
        case LOGOUT:
            return state;
        case SIGN_UP:
            return state;
        default:
            return state;
    }
}