import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES
    // GET_CONTENT_INFO
 } from '../actions/types'

const defaultState = {
    isEditing: false,
    isViewingAllUsers: false,
    enteredRoom: false,
    isSendingInvite: false,
    isViewingInvites: false
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case IS_EDITING_PROFILE:
            const isEditing = !state.isEditing
            return { ...state, isEditing };
        case SUBMIT_PROFILE_CHANGES:
            return { ...defaultState };
        // case GET_CONTENT_INFO:
        //     console.log('get content info in contentReducer reached!')
        //     console.log(action.payload)
        //     return state;
        case TOGGLE_SHOW_INVITES:
            const isViewingInvites = !state.isViewingInvites
            return { ...defaultState, isViewingInvites }
        default:
            return state;
    }
}

