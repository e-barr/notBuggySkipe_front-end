import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import contentReducer from './contentReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    content: contentReducer
})