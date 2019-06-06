import React, { Component } from 'react';
import {
  ErrorMessage,
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
    isBlank: true,
    errorMsg: false,
  };

  handleChange = e => {
    const checkUserField = e.target.name === 'username' && e.target.value === '';
    console.log( checkUserField );
    this.setState( {
      [e.target.name]: e.target.value,
      isBlank: checkUserField,
      errorMsg: false,
    } );
  };

  handleSubmit = e => {
    if ( this.state.isBlank ) {
      e.preventDefault();
      this.setState( { errorMsg: true } );
    } else {
      const user = JSON.stringify( this.state.username );
      localStorage.setItem( 'username', user );
      this.setState( { username: '' } );
    }
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
            { this.state.errorMsg ?
              <ErrorMessage>Must provide a username</ErrorMessage> : null };
            <LoginFields>
              <LoginInputs type={ 'password' } placeholder={ 'password' }/>
            </LoginFields>
            <LoginButton>
              <LoginButtonText>Log In</LoginButtonText>
            </LoginButton>
          </LoginForm>
        </LoginPageForm>
      </LoginPage>
    );
  }
}

export default Login;