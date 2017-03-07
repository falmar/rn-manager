import React from 'react'
import {Scene, Router} from 'react-native-router-flux'
import {connect} from 'react-redux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{marginTop: 53}}>
      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title='Login'
         />
      </Scene>
      <Scene key='main'>
        <Scene
          key='employeeList'
          title='Employee List'
          component={EmployeeList}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
