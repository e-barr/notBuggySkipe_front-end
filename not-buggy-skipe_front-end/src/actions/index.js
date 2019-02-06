// import { LOGIN, LOGOUT, SIGN_UP } from './types'
import { LOGIN } from './types'
// import db from '../apis/db'

// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

export const login = (formValues) => async dispatch => {
    console.log(formValues)
    // console.log(getState)
    // const resp = await db.get('/api/v1/login' )
    dispatch({
        type: LOGIN,
        payload: formValues
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

