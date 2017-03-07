import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeUpdate from './components/EmployeeUpdate'

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
          rightTitle='Add'
          onRight={() => { Actions.employeeCreate() }}
          initial
        />
        <Scene
          key='employeeCreate'
          title='Create Employee'
          component={EmployeeCreate}
        />
        <Scene
          key='employeeUpdate'
          title='Update Employee'
          component={EmployeeUpdate}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
