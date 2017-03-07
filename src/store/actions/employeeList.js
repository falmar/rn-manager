import firebase from 'firebase'

import * as types from '../constants/employeeList'

const fetchEmployeesFulfilled = payload => ({
  type: types.FETCH_EMPLOYEES_FULFILLED,
  payload
})

export const fetchEmployees = () => dispatch => {
  const {currentUser} = firebase.auth()

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .on('value', snapshot => {
    console.log(snapshot.val())

    dispatch(
      fetchEmployeesFulfilled(snapshot.val())
    )
  })
}
