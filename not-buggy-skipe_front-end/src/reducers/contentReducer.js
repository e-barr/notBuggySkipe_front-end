import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES,
    START_MEETING,
    END_MEETING,
    TOGGLE_VIEW_ADDRESS_BOOK,
    TOGGLE_SEND_INVITE_FORM,
    SET_INVITE_INFO,
    SET_INVITE_RECEIVER,
    SET_INVITE_MESSAGE_AND_ROOM_NAME
 } from '../actions/types'

const defaultState = {
    isEditing: false,
    isViewingAllUsers: false,
    isStartingMeeting: false,
    enteredRoom: false,
    isViewingInvites: false,
    isViewingAddressBook: false,
    isViewingSendInviteForm: false,
    inviteReceiver: null,
    inviteMessage: '',
    inviteRoomName: null
}

export default (state = defaultState, action) => {
    const { inviteReceiver, inviteMessage, inviteRoomName } = state
    
    switch(action.type) {
        case IS_EDITING_PROFILE:
            const isEditing = !state.isEditing
            return {
                ...state,
                isEditing,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            };
        case SUBMIT_PROFILE_CHANGES:
            return {
                ...defaultState,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            };
        case TOGGLE_SHOW_INVITES:
            const isViewingInvites = !state.isViewingInvites
            return {
                ...defaultState,
                isViewingInvites,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            }
        case START_MEETING:
            return {
                ...defaultState,
                isStartingMeeting: true,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            }
        case END_MEETING:
            return {
                ...defaultState,
                isStartingMeeting: false,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            }
        case TOGGLE_VIEW_ADDRESS_BOOK:
            const isViewingAddressBook = !state.isViewingAddressBook
            return {
                ...defaultState,
                isViewingAddressBook,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            }
        case TOGGLE_SEND_INVITE_FORM:
            const isViewingSendInviteForm = !state.isViewingSendInviteForm
            return {
                ...defaultState,
                isViewingSendInviteForm,
                inviteReceiver,
                inviteMessage,
                inviteRoomName
            }
        case SET_INVITE_RECEIVER:
            return {
                ...state,
                inviteReceiver: action.payload,
                inviteMessage,
                inviteRoomName
            }
        default:
            return state;
    }
}

