// import { LOGIN, LOGOUT, SIGN_UP } from './types'
import { LOGIN } from './types'
import db from '../apis/db'

// const axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

export const login = (event, formValues) => async dispatch => {
// export const login = formValues => {
    console.log('login was activated')
    // debugger;
    console.log(formValues)
    // console.log(getState)
    const resp = await db.post('/api/v1/login' )
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

