import { 
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES,
    START_MEETING,
    END_MEETING,
    TOGGLE_VIEW_ADDRESS_BOOK,
    TOGGLE_SEND_INVITE_FORM,
    SET_INVITE_RECEIVER,
    TOGGLE_ADD_CONTACTS,
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
    isViewingAddContacts: false,
    inviteReceiver: null,
    inviteMessage: '',
    inviteRoomName: null,
}


export default (state = defaultState, action) => {
    const { inviteReceiver, inviteMessage, inviteRoomName } = state
    const updatedDefault = {
        ...state,
        inviteReceiver,
        inviteMessage,
        inviteRoomName
    }
   
    switch(action.type) {
        case IS_EDITING_PROFILE:
            const isEditing = !state.isEditing
            return {
                ...updatedDefault,
                isEditing
            };
        case SUBMIT_PROFILE_CHANGES:
            return {
                ...defaultState
            };
        case TOGGLE_SHOW_INVITES:
            const isViewingInvites = !state.isViewingInvites
            return {
                ...updatedDefault,
                isViewingInvites
            }
        case START_MEETING:
            return {
                ...updatedDefault,
                isStartingMeeting: true
            }
        case END_MEETING:
            return {
                ...updatedDefault,
                isStartingMeeting: false,
            }
        case TOGGLE_VIEW_ADDRESS_BOOK:
            const isViewingAddressBook = !state.isViewingAddressBook
            return {
                ...updatedDefault,
                isViewingAddressBook
            }
        case TOGGLE_SEND_INVITE_FORM:
            const isViewingSendInviteForm = !state.isViewingSendInviteForm
            return {
                ...defaultState,
                isViewingSendInviteForm,
                inviteReceiver
            }
        case SET_INVITE_RECEIVER:
            return {
                ...updatedDefault,
                inviteReceiver: action.payload
            }
        case TOGGLE_ADD_CONTACTS:
            const isViewingAddContacts = !state.isViewingAddContacts
            return {
                ...defaultState,
                isViewingAddContacts
            }
        default:
            return state;
    }
}

