import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeForm'

import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
  constructor (props) {
    super(props)

    this.onSave = this.onSave.bind(this)
  }

  componentWillMount () {
    const {changeText} = this.props

    changeText({key: 'uid', value: ''})
    changeText({key: 'employeeName', value: ''})
    changeText({key: 'phone', value: ''})
    changeText({key: 'shift', value: 1})
  }

  onSave () {
    const {employeeName, phone, shift} = this.props
    const {saveEmployee} = this.props

    saveEmployee({employeeName, phone, shift})
  }

  render () {
    const {employeeName, phone, shift} = this.props

    return (
      <Card>
        <EmployeeForm {...{employeeName, phone, shift}} />

        <CardSection>
          <Button text='Save' onPress={this.onSave} />
        </CardSection>
      </Card>
    )
  }
}

EmployeeCreate.propTypes = {
  employeeName: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.number,
  saveEmployee: PropTypes.func,
  changeText: PropTypes.func
}

const mapStateToProps = ({employeeForm}) => ({
  employeeName: employeeForm.employeeName,
  phone: employeeForm.phone,
  shift: employeeForm.shift
})

const mapDispatchToProps = {
  changeText: actions.changeText,
  saveEmployee: actions.createEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
