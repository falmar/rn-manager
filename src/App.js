import React, {Component} from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import firebase from 'firebase'

import configureStore from './store'

import {Header} from './components/common'
import LoginForm from './components/LoginForm'

const store = configureStore({})

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey: 'AIzaSyANVczTqcj9lIjlz6cr6sOj31dHjqD033A',
      authDomain: 'manager-435e5.firebaseapp.com',
      databaseURL: 'https://manager-435e5.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '734949406289'
    })
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    firebase.app().delete().then(() => {

    })
  }

  render () {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Header title='Manager' />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App
