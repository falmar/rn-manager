import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet} from 'react-native'

import {CardSection} from './common'

class EmployeeListItem extends Component {
  render () {
    const {employee} = this.props

    const {titleStyle} = styles

    return (
      <CardSection>
        <Text
          style={titleStyle}
          >{employee.employeeName}
        </Text>
      </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
})

EmployeeListItem.propTypes = {
  employee: PropTypes.object.isRequired
}

export default EmployeeListItem
