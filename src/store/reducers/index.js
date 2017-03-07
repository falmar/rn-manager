import {combineReducers} from 'redux'

import auth from './auth'
import employeeForm from './employeeForm'

const reducers = combineReducers({
  auth,
  employeeForm
})

export default reducers
