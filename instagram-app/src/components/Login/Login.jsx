import React, { Component } from 'react';
import {
  InstagramLogin,
  InstagramPicture,
  LoginButton,
  LoginButtonText,
  LoginFields,
  LoginForm,
  LoginInputs,
  LoginPage,
  LoginPageForm,
} from '../styles/StyledComponents';

class Login extends Component {
  state = {
    username: '',
  };

  handleChange = e => {
    this.setState( { [e.target.name]: e.target.value } );
  };
  handleSubmit = e => {
    // e.preventDefault();
    const user = JSON.stringify( this.state.username );
    localStorage.setItem( 'username', user );
    this.setState( { username: '' } );
  };

  render() {
    return (

      <LoginPage>
        <LoginPageForm>
          <InstagramLogin/>
          <InstagramPicture/>
          <LoginForm onSubmit={ e => this.handleSubmit( e ) }>
            <LoginFields>
              <LoginInputs value={ this.state.username } name={ 'username' }
                           onChange={ this.handleChange }
                           placeholder={ 'username' }/>
            </LoginFields>
            <LoginFields>
              <LoginInputs type={ 'password' } placeholder={ 'password' }/>
            </LoginFields>
            <LoginButton>
              <LoginButtonText>Log In</LoginButtonText>
            </LoginButton>
          </LoginForm>
        </LoginPageForm>
      </LoginPage>
    )
      ;
  }
}

export default Login;