import React, {Component, PropTypes} from 'react'
import {View, Text, Modal, StyleSheet} from 'react-native'

import {CardSection} from './CardSection'
import {Button} from './Button'

class Confirm extends Component {
  render () {
    const {children, open} = this.props
    const {onAccept, onDecline} = this.props

    const {modalStyle, textStyle, viewStyle, sectionStyle} = styles

    return (
      <Modal
        animationType='slide'
        style={modalStyle}
        visible={open}
        onRequestClose={onDecline}
      >
        <View style={viewStyle}>
          <CardSection style={sectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </CardSection>

          <CardSection>
            <Button text='Yes' onPress={onAccept} />
            <Button text='No' onPress={onDecline} />
          </CardSection>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalStyle: {

  },
  viewStyle: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center'
  },
  sectionStyle: {
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    lineHeight: 40
  }
})

Confirm.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onAccept: PropTypes.func,
  onDecline: PropTypes.func
}

export {Confirm}
