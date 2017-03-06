import * as types from '../constants/auth'

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: ''
}

export default (state = initialState, action) => {
  if (!state.hydrated) {
    state = { ...initialState, ...state, hydrated: true }
  }

  switch (action.type) {
    case types.CHANGE_TEXT:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }

    case types.SIGNIN_START:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case types.SIGNIN_FULFILLED:
      return {
        ...state,
        loading: false,
        user: action.payload,
        email: '',
        password: ''
      }
    case types.SIGNIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        password: ''
      }

    default:
      return state
  }
}
