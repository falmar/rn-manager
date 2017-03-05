import React, {PropTypes} from 'react'
import {View, StyleSheet} from 'react-native'

const Card = ({children}) => {
  const {containerStyle} = styles

  return (
    <View style={containerStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    position: 'relative'

  }
})

Card.propTypes = {
  children: PropTypes.node
}

export {Card}
