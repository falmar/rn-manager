import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

import * as types from '../constants/employeeForm'

export const changeText = payload => ({
  type: types.CHANGE_TEXT,
  payload
})

const saveEmployeStart = () => ({
  type: types.SAVE_EMPLOYEE_START
})

const saveEmployeeFulfilled = payload => {
  return {
    type: types.SAVE_EMPLOYEE_FULFILLED,
    payload
  }
}

const saveEmployeeRejected = error => {
  // console.error(error)

  return {
    type: types.SAVE_EMPLOYEE_REJECTED,
    payload: error
  }
}

export const saveEmployee = payload => dispatch => {
  const {currentUser} = firebase.auth()

  dispatch(saveEmployeStart())

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push(payload)
  .then(response => {
    dispatch(saveEmployeeFulfilled(response))

    Actions.employeeList({type: 'reset'})
  })
  .catch(saveEmployeeRejected(dispatch))
}
