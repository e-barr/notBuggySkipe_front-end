// import { LOGIN, LOGOUT, SIGN_UP } from './types'
import { LOGIN, LOGOUT, GET_USER_INFO } from './types'
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

    if (!payload.error && payload.jwt) {
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

// export const signUp = (formValues) => {
//     return {
//         type: SIGN_UP,
//         payload: formValues
//     }
// }

