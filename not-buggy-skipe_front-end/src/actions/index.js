// import { LOGIN, LOGOUT, SIGN_UP } from './types'
import { LOGIN } from './types'
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

    const data = resp.data
    
    const payload = resp.data

    if (!data.error) {
        localStorage.token = data.jwt
    }

    dispatch({
        type: LOGIN,
        payload
    })

    history.push("/main")
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

