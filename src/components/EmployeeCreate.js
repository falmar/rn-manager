import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeForm'

import {Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
  constructor (props) {
    super(props)

    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText (key) {
    return text => {
      this.props.changeText({key, value: text})
    }
  }

  render () {
    const {employeeName, phone} = this.props

    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            value={employeeName}
            placeholder='Alexander Pierce'
            onChangeText={this.onChangeText('employeeName')}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            value={phone}
            placeholder='+58 555 5555555'
            onChangeText={this.onChangeText('phone')}
          />
        </CardSection>

        <CardSection>
          <Button text='Save' />
        </CardSection>

      </Card>
    )
  }
}

EmployeeCreate.propTypes = {
  employeeName: PropTypes.string,
  phone: PropTypes.string,
  swift: PropTypes.string,
  changeText: PropTypes.func
}

const mapStateToProps = ({employeeForm}) => ({
  employeeName: employeeForm.employeeName,
  phone: employeeForm.phone,
  swift: employeeForm.swift
})

const mapDispatchToProps = dispatch => ({
  changeText: text => dispatch(actions.changeText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
