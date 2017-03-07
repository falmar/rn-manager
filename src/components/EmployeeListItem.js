import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'
import {Actions} from 'react-native-router-flux'

import {CardSection} from './common'

class EmployeeListItem extends Component {
  constructor (props) {
    super(props)

    this.onPressItem = this.onPressItem.bind(this)
  }

  onPressItem () {
    const {employee} = this.props

    Actions.employeeUpdate({ employee })
  }

  render () {
    const {employee} = this.props

    const {titleStyle} = styles

    return (
      <TouchableWithoutFeedback
        onPress={this.onPressItem}
      >
        <View>
          <CardSection>
            <Text
              style={titleStyle}
              >{employee.employeeName}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    height: 35,
    lineHeight: 30
  }
})

EmployeeListItem.propTypes = {
  employee: PropTypes.object.isRequired
}

export default EmployeeListItem
