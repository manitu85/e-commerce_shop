import * as userActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

export const userReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_START: 
    case userActionTypes.EMAIL_SIGN_IN_START: 
      return {  
        ...state,
        currentUser: action.payload
      }

    case userActionTypes.SIGN_IN_SUCCESS: 
      return {  
        ...state,
        currentUser: action.payload,
        error: null
      }

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }

    case userActionTypes.SIGN_IN_FAIL: 
    case userActionTypes.SIGN_OUT_FAIL: 
    case userActionTypes.SIGN_UP_FAIL: 
      return {  
        ...state,
        error: action.payload
      }
     
    default:
      return state
  }
}

export default userReducer


