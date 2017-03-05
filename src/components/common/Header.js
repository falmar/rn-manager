import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
  const {viewStyle, textStyle} = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    position: 'relative',
    elevation: 2
  },
  textStyle: {
    fontSize: 24
  }
})

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export {Header}
