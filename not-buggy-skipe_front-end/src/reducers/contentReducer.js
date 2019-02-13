import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES,
    START_MEETING,
    END_MEETING,
    TOGGLE_VIEW_ADDRESS_BOOK
 } from '../actions/types'

const defaultState = {
    isEditing: false,
    isViewingAllUsers: false,
    isStartingMeeting: false,
    enteredRoom: false,
    isSendingInvite: false,
    isViewingInvites: false,
    isViewingAddressBook: false
}

export default (state = defaultState, action) => {
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
            return { ...defaultState, isStartingMeeting: true }
        case END_MEETING:
            return {
                ...defaultState, isStartingMeeting: false
            }
        case TOGGLE_VIEW_ADDRESS_BOOK:
            const isViewingAddressBook = !state.isViewingAddressBook
            return {
                ...defaultState,
                isViewingAddressBook
            }
        default:
            return state;
    }
}

