import firebase from 'firebase'

import * as types from '../constants/auth'

// payload {key: '', value: ''}
export const changeText = payload => ({
  type: types.CHANGE_TEXT,
  payload
})

const loginStart = () => ({
  type: types.SIGNIN_START
})

const loginFulfilled = user => ({
  type: types.SIGNIN_FULFILLED,
  payload: user
})

const loginRejected = error => ({
  type: types.SIGNIN_REJECTED,
  payload: error
})

// payload {key: '', value: ''}
export const signIn = payload => {
  return dispatch => {
    dispatch(loginStart())

    firebase.auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
      dispatch(loginFulfilled(user))
    })
    .catch(() => {
      dispatch(loginRejected('Authentication Failed.'))
    })
  }
}
