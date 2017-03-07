import React, {Component, PropTypes} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeList'

class EmployeeList extends Component {
  componentWillMount () {
    this.props.fetchEmployees()
  }

  renderEmployees () {
    const {employees} = this.props

    return Object.keys(
      employees
    ).map(key => {
      return <Text key={key}>{employees[key].employeeName}</Text>
    })
  }

  render () {
    return (
      <View>
        {this.renderEmployees()}
      </View>
    )
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.object.isRequired,
  fetchEmployees: PropTypes.func.isRequired
}

const mapStateToProps = ({employeeList}) => ({
  employees: employeeList.employees
})

const mapDispatchToProps = {
  fetchEmployees: actions.fetchEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
