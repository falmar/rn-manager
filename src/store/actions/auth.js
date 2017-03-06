import * as types from '../constants/auth'

// payload {key: '', value: ''}
export const changeText = payload => ({
  type: types.CHANGE_TEXT,
  payload
})

// payload {key: '', value: ''}
export const onSubmit = payload => {
  return dispatch => new Promise((resolve, reject) => {

  })
}
