import {combineReducers} from 'redux'

import auth from './auth'
import employeeForm from './employeeForm'
import employeeList from './employeeList'

const reducers = combineReducers({
  auth,
  employeeForm,
  employeeList
})

export default reducers
