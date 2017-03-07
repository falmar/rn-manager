import * as types from '../constants/employeeList'

const initialState = {
  employees: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMPLOYEES_FULFILLED:
      return {
        ...state,
        employees: action.payload || {}
      }
    default:
      return state
  }
}
