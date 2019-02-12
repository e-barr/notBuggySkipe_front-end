import { 
    LOGIN,
    SIGN_UP,
    LOGOUT,
    GET_USER_INFO,
    IS_EDITING_PROFILE,
    SUBMIT_PROFILE_CHANGES,
    TOGGLE_SHOW_INVITES,
    START_MEETING,
    END_MEETING
} from './types'
import db from '../apis/db'
import swal from 'sweetalert'
import history from '../history'

export const login = ({ username, password }) => async dispatch => {
    let resp = {}
    try {
        resp = await db.post('/api/v1/login', {
            user: { username, password },
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        resp = { error: error.message }
        swal("Invalid credentials", "Invalid username and/or password. Please try again.", "error")
    }

    const payload = resp.data

    if (!payload.error && payload.jwt.length > 0) {
        localStorage.token = payload.jwt
    }

    dispatch({
        type: LOGIN,
        payload
    })

    history.push("/main")
}

export const logout = () => {
    history.push("/")
    localStorage.clear()

    return {
        type: LOGOUT
    }
}

export const getUserInfo = () => async dispatch => {
    const token = localStorage.token
    let resp = {}

    try {
        resp = await db.get('/api/v1/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        resp = { error: error.message }
        swal("Invalid credentials", "Invalid username and/or password. Please try again.", "error")
    }

    const payload = resp.data.user

    dispatch({
        type: GET_USER_INFO,
        payload
    })

    history.push("/main")
}

export const signUp = ({ email, username, password, confirmPassword, city, country, image_url }) => async dispatch => {
    
    let resp = {}
    let payload

    if (password === confirmPassword) {
        try {
            resp = await db.post('/api/v1/users', {
                user: { email, username, password, city, country, image_url },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            payload = resp.data
            localStorage.token = payload.jwt
            swal("Success!", "Your account has been successfully created. You will now be redirected to the main page.", "success")
            history.push("/main")
        } catch (error) {
            resp = { error: error.message }
            swal("Account creation failed.", `${resp.error}`, "error")
        }
    }

    dispatch({
        type: SIGN_UP,
        payload
    })
}

export const submitProfileChanges = (currentUser, updatedValues) => async dispatch => {
    const { email, username, city, country, image_url } = updatedValues
    const token = localStorage.token
    let updatedUser = { ...currentUser, email, username, city, country, image_url }
    let resp = {}
    let payload;
    const headersConfig = { headers: {
        'Authorization' : `Bearer ${token}`
    }}

    try {
        resp = await db.patch('/api/v1/profile', {
            user: { ...updatedUser },
            headers: {
                'Content-Type': 'application/json'
            },
        }, headersConfig)
        payload = resp.data
        swal("Success!", "Your account has been successfully updated.", "success")
        history.push("/main")
    } catch (error) {
        resp = { error: error.message }
        swal("Profile update failed.", `${resp.error}`, "error")
    }

    dispatch({
        type: SUBMIT_PROFILE_CHANGES,
        payload
    })
    
}

export const isEditingProfile = () => {
    return {
        type: IS_EDITING_PROFILE
    }
}

export const toggleShowInvites = () => {
    return {
        type: TOGGLE_SHOW_INVITES
    }
}

export const deleteInvite = (id, user_id) => async dispatch => {
    
    const token = localStorage.token
    let resp = {}
    let payload

    try {
        resp = await db.delete('/api/v1/invites', {
            data: {
                invite: { id, user_id }
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
        })
        payload = resp.data.user
    } catch (error) {
        resp = { error: error.message }
        swal("Invitation failed to delete.", `${resp.error}`, "error")
    }

    dispatch({
        type: GET_USER_INFO,
        payload
    })
}

export const startMeeting = (currentUser, meeting_id) => async dispatch => {
    const updatedUser = { ...currentUser, meeting_id }
    let resp = {}
    let payload;
    let token = localStorage.token

    const headersConfig = { headers: {
        'Authorization' : `Bearer ${token}`
    }}

    try {
        resp = await db.patch('/api/v1/profile', {
            user: updatedUser,
            headers: {
                'Content-Type': 'application/json'
            }
        }, headersConfig)
        payload = resp.data.user
    } catch (error) {
        resp = { error: error.message }
        swal("Meeting entrance failed.", `${resp.error}`, "error")
    }


    let returnedFunc = (dispatch) => {
        dispatch({
            type: GET_USER_INFO,
            payload
        })

        dispatch({
            type: START_MEETING
        })

    }

    return dispatch(returnedFunc)
}

export const endMeeting = () => {
    return {
        type: END_MEETING
    }
}