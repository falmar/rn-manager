import React, {Component, PropTypes} from 'react'
import {ListView} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeList'

import EmployeeListItem from './EmployeeListItem'

class EmployeeList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dataSource: {}
    }
  }

  componentWillMount () {
    this.props.fetchEmployees()

    this.createDataSource(this.props.employees)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps.employees)
  }

  createDataSource (employees) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.setState({
      dataSource: ds.cloneWithRows(
        Object.keys(employees).map(key => ({...employees[key], uid: key}))
      )
    })
  }

  renderRow (employee) {
    return <EmployeeListItem employee={employee} />
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
       />
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
