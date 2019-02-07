import { LOGIN, LOGOUT, SIGN_UP } from '../actions/types'

const defaultState = {
    isSignedIn: false,
    user: null,
    loginForm: {}
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