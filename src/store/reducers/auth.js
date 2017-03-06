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
    default:
      return state
  }
}
