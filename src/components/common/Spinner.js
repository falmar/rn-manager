import React, {PropTypes} from 'react'
import {View, ActivityIndicator} from 'react-native'

const Spinner = ({size}) => {
  const {containerStyle} = styles

  return (
    <View style={containerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

Spinner.propTypes = {
  size: PropTypes.string
}

export {Spinner}
