import React, {Component, PropTypes} from 'react'
import {Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import * as actions from '../store/actions/auth'

import {Card, CardSection, Input, Button, Spinner} from './common'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeText (key) {
    return value => {
      this.props.changeText({key, value})
    }
  }

  onSubmit () {
    const {email, password} = this.props

    this.props.onSubmit({email, password})
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <Button
        text='Log In'
        onPress={this.onSubmit}
      />
    )
  }

  renderError () {
    const {error} = this.props
    const {errorStyle} = styles

    if (!error) {
      return null
    }

    return <Text style={errorStyle}>{error}</Text>
  }

  render () {
    const {email, password} = this.props

    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label='Email'
            placeholder='user@email.com'
            onChangeText={this.onChangeText('email')}
          />
        </CardSection>

        <CardSection>
          <Input
            value={password}
            secureTextEntry
            label='Password'
            placeholder='********'
            onChangeText={this.onChangeText('password')}
           />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5
  }
})

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  changeText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToPros = ({auth}) => ({
  email: auth.email,
  password: auth.password,
  loading: auth.loading,
  error: auth.error
})

const mapDispatchToProps = dispatch => ({
  changeText: payload => dispatch(actions.changeText(payload)),
  onSubmit: payload => dispatch(actions.signIn(payload))
})

export default connect(mapStateToPros, mapDispatchToProps)(LoginForm)
