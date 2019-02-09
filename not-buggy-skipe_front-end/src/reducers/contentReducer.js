import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    // GET_CONTENT_INFO
 } from '../actions/types'

const defaultState = {
    isEditing: false,
    isViewingAllUsers: false,
    enteredRoom: false,
    isSendingInvite: false
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
        default:
            return state;
    }
}

