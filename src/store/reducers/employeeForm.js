import * as types from '../constants/employeeForm'

const initialState = {
  employeeName: '',
  phone: '',
  shift: 1,
  loading: false
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

    case types.SAVE_EMPLOYEE_START:
      return {
        ...state,
        loading: true
      }
    case types.SAVE_EMPLOYEE_FULFILLED:
      return {
        ...state,
        loading: false,
        employeeName: '',
        phone: '',
        shift: 1
      }
    case types.SAVE_EMPLOYEE_REJECTED:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
