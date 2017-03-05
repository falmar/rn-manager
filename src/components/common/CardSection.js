import React, {PropTypes} from 'react'
import {View, StyleSheet} from 'react-native'

const CardSection = ({children}) => {
  const {containerStyle} = styles

  return (
    <View style={containerStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',

    padding: 5,

    position: 'relative',

    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
})

CardSection.propTypes = {
  children: PropTypes.node
}

export {CardSection}
