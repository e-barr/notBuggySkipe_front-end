import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES,
    START_MEETING,
    END_MEETING
 } from '../actions/types'

const defaultState = {
    isEditing: false,
    isViewingAllUsers: false,
    isStartingMeeting: false,
    enteredRoom: false,
    isSendingInvite: false,
    isViewingInvites: false
}

export default (state = defaultState, action) => {
    console.log('contentReducer reached line 19')
    switch(action.type) {
        case IS_EDITING_PROFILE:
            const isEditing = !state.isEditing
            return { ...state, isEditing };
        case SUBMIT_PROFILE_CHANGES:
            return { ...defaultState };
        case TOGGLE_SHOW_INVITES:
            const isViewingInvites = !state.isViewingInvites
            return { ...defaultState, isViewingInvites }
        case START_MEETING:
            console.log('START_MEETING in contentReducer reached')
            return { ...defaultState, isStartingMeeting: true }
        case END_MEETING:
            return {
                ...defaultState, isStartingMeeting: false
            }
        default:
            return state;
    }
}

