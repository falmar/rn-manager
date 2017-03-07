import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeForm'

import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeUpdate extends Component {
  constructor (props) {
    super(props)

    this.onSave = this.onSave.bind(this)
    this.onFire = this.onFire.bind(this)
  }

  componentWillMount () {
    const {employee, changeText} = this.props

    if (employee) {
      changeText({key: 'uid', value: employee.uid})
      changeText({key: 'employeeName', value: employee.employeeName})
      changeText({key: 'phone', value: employee.phone})
      changeText({key: 'shift', value: employee.shift})
    }
  }

  onSave () {
    const {uid, employeeName, phone, shift} = this.props
    const {saveEmployee} = this.props

    saveEmployee({uid, employeeName, phone, shift})
  }

  onFire () {

  }

  render () {
    const {employeeName, phone, shift} = this.props

    return (
      <Card>
        <EmployeeForm {...{employeeName, phone, shift}} />

        <CardSection>
          <Button text='Save' onPress={this.onSave} />
        </CardSection>

        <CardSection>
          <Button text='Fire' onPress={this.onFire} />
        </CardSection>
      </Card>
    )
  }
}

EmployeeUpdate.propTypes = {
  uid: PropTypes.string,
  employeeName: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.number,
  saveEmployee: PropTypes.func,
  changeText: PropTypes.func,
  employee: PropTypes.object
}

const mapStateToProps = ({employeeForm}) => ({
  uid: employeeForm.uid,
  employeeName: employeeForm.employeeName,
  phone: employeeForm.phone,
  shift: employeeForm.shift
})

const mapDispatchToProps = {
  changeText: actions.changeText,
  saveEmployee: actions.updateEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeUpdate)