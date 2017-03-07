import React, {Component, PropTypes} from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/employeeForm'

import {CardSection, Input} from './common'

class EmployeeForm extends Component {
  onChangeText (key) {
    return text => {
      this.props.changeText({key, value: text})
    }
  }

  render () {
    const {employeeName, phone, shift} = this.props

    const {shiftTextStyle, shiftPickerStyle} = styles

    return (
      <View>
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
          <Text style={shiftTextStyle}>
            Shift
          </Text>
          <Picker
            style={shiftPickerStyle}
            selectedValue={shift}
            onValueChange={this.onChangeText('shift')}
          >
            <Picker.Item label='Monday' value={1} />
            <Picker.Item label='Thuesday' value={2} />
            <Picker.Item label='Wednesday' value={3} />
            <Picker.Item label='Thursday' value={4} />
            <Picker.Item label='Friday' value={5} />
            <Picker.Item label='Saturday' value={6} />
            <Picker.Item label='Sunday' value={7} />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shiftTextStyle: {
    alignSelf: 'center',
    flex: 4,
    paddingLeft: 10,
    fontSize: 18
  },
  shiftPickerStyle: {
    flex: 7
  }
})

EmployeeForm.propTypes = {
  employeeName: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.number,
  changeText: PropTypes.func
}

const mapDispatchToProps = {
  changeText: actions.changeText
}

export default connect(null, mapDispatchToProps)(EmployeeForm)
