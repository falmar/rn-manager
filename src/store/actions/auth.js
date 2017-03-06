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

const loginFulfilled = dispatch => user => dispatch({
  type: types.SIGNIN_FULFILLED,
  payload: user
})

const loginRejected = (dispatch, error) => () => dispatch({
  type: types.SIGNIN_REJECTED,
  payload: error
})

// payload {key: '', value: ''}
export const signIn = payload => {
  return dispatch => {
    dispatch(loginStart())

    firebase.auth()
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(loginFulfilled(dispatch))
    .catch(() => {
      firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(loginFulfilled(dispatch))
      .catch(loginRejected(dispatch, 'Authentication Failed.'))
    })
  }
}
