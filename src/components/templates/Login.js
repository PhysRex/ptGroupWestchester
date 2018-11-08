import _ from 'lodash';
import React, { Component } from 'react';
import { 
  Grid,
  Form,
  Message,
} from 'semantic-ui-react'


class Login extends Component {
  state = {
    isFirstLogin: false,
    error: {
      username: false,
      password: false,
      firstName: false,
      lastName: false,
      email: false,
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onFirstLogin = () => this.setState(prevState => ({ isFirstLogin: !prevState.isFirstLogin }))

  render() {
    const {
      username,
      password,
      firstName,
      lastName,
      email,
    } = this.state.error;

    return (
      <Grid columns={12} >
        <Grid.Row centered >
          <Grid.Column mobile={12} computer={8} textAlign='left'>
            { !_.isEmpty(this.props.submitErrors) &&
              <Message
                error
                header={this.props.submitErrors.header}
                content={this.props.submitErrors.content}
              />
            }
            <Form onSubmit={() => this.props.submitLogin(this.state)}>
              <Form.Input
                fluid
                name='username'
                label='Username'
                placeholder='Username'
                error={username}
                onChange={this.handleChange} 
              />
              <Form.Input
                fluid
                name='password'
                label='Password'
                placeholder='Password'
                type='password'
                error={password}
                onChange={this.handleChange} 
              />
              { this.state.isFirstLogin &&
                <Form.Group grouped>
                  <Form.Input
                    fluid
                    name='firstName'
                    label='First Name'
                    placeholder='First Name'
                    error={firstName}
                    onChange={this.handleChange} 
                  />
                  <Form.Input
                    fluid
                    name='lastName'
                    label='Last Name'
                    placeholder='Last Name'
                    error={lastName}
                    onChange={this.handleChange} 
                  />
                  <Form.Input
                    fluid
                    name='email'
                    label='E-mail'
                    placeholder='E-mail'
                    error={email}
                    onChange={this.handleChange} 
                  />
                </Form.Group>
              }
              <Form.Group inline>
                <Form.Button>Submit</Form.Button>
                <Form.Checkbox label='First Time?' onChange={this.onFirstLogin}/>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default Login;
