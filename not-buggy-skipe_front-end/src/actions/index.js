// import { LOGIN, LOGOUT, SIGN_UP } from './types'
import { LOGIN } from './types'
import db from '../apis/db'
import swal from 'sweetalert'

// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

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
        swal("Invalid credentials", "Invalid username and/or password. Please try again.", "error", {
            button: false
        })
    }

    console.log(resp)
    const data = resp.data
    
    const payload = {}

    // if (!data.error) {
    //     localStorage.token = data.jwt
    //     payload.user = resp.data.user
    // } else {
    //     payload.loginError = data.error
    // }

    // console.log(payload)
    dispatch({
        type: LOGIN,
        payload
    })
}

// export const logout = () => {
//     return {
//         type: LOGOUT
//     }
// }

// export const signUp = (formValues) => {
//     return {
//         type: SIGN_UP,
//         payload: formValues
//     }
// }

