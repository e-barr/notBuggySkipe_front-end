import { LOGIN, LOGOUT, SIGN_UP } from '../actions/types'

const defaultState = {
    isSignedIn: false,
    currentUser: null,
    loginError: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN:
            return state;
        case LOGOUT:
            return state;
        case SIGN_UP:
            return state;
        default:
            return state;
    }
}