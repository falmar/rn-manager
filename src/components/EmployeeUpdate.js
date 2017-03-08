import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Communication from 'react-native-communications'

import * as actions from '../store/actions/employeeForm'

import {getWeekDay} from '../util'

import {Card, CardSection, Button, Confirm} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.onSave = this.onSave.bind(this)
    this.onText = this.onText.bind(this)
    this.onAcceptFire = this.onAcceptFire.bind(this)
    this.onDeclineFire = this.onDeclineFire.bind(this)
    this.onRequestOpen = this.onRequestOpen.bind(this)
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

  onText () {
    const shiftName = getWeekDay(this.props.shift)

    Communication.text(this.props.phone, `Your shift is on: ${shiftName}`)
  }

  onRequestOpen () {
    this.setState({modalOpen: true})
  }

  onAcceptFire () {
    this.setState({modalOpen: false})
    this.props.deleteEmployee(this.props.uid)
  }

  onDeclineFire () {
    this.setState({modalOpen: false})
  }

  render () {
    const {employeeName, phone, shift} = this.props

    return (
      <Card>
        <Confirm
          open={this.state.modalOpen}
          onAccept={this.onAcceptFire}
          onDecline={this.onDeclineFire}
        >
          Are you sure want to fire this person?
        </Confirm>

        <EmployeeForm {...{employeeName, phone, shift}} />

        <CardSection>
          <Button text='Save' onPress={this.onSave} />
        </CardSection>

        <CardSection>
          <Button text='Text Schedule' onPress={this.onText} />
        </CardSection>

        <CardSection>
          <Button text='Fire' onPress={this.onRequestOpen} />
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
  employee: PropTypes.object,
  deleteEmployee: PropTypes.func
}

const mapStateToProps = ({employeeForm}) => ({
  uid: employeeForm.uid,
  employeeName: employeeForm.employeeName,
  phone: employeeForm.phone,
  shift: employeeForm.shift
})

const mapDispatchToProps = {
  changeText: actions.changeText,
  saveEmployee: actions.updateEmployee,
  deleteEmployee: actions.deleteEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeUpdate)
