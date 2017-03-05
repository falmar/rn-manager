import React, {PropTypes} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {containerStyle, labelStyle, textInputStyle} = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={textInputStyle}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    flex: 4,
    paddingLeft: 10
  },
  textInputStyle: {
    height: 50,
    fontSize: 18,
    lineHeight: 23,
    flex: 6
  }
})

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  secureTextEntry: PropTypes.bool
}

export {Input}
