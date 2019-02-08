import { LOGIN, GET_USER_INFO, LOGOUT, SIGN_UP } from './types'
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

