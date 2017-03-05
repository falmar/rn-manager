/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {AppRegistry, UIManager, Platform} from 'react-native'

import App from './src/App'

export default class ManagerApp extends Component {
  constructor (props) {
    super(props)

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render () {
    return <App />
  }
}

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

AppRegistry.registerComponent('manager_app', () => ManagerApp)
