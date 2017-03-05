import React, {PropTypes} from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const Button = ({text, onPress}) => {
  const {buttonStyle, textStyle} = styles

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export {Button}
