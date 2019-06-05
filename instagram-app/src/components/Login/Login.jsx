import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
  };

  handleChange = e => {
    this.setState( { [e.target.name]: e.target.value } );
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = JSON.stringify( this.state.username );
    localStorage.setItem( 'username', user );
    this.props.logIn();
  };

  render() {
    return (

      <div>
        <form onSubmit={ e => this.handleSubmit( e ) }>
          <input value={ this.state.username } name={ 'username' }
                 onChange={ this.handleChange }/>
          <input/>
          <button>Log In</button>
        </form>
      </div>
    )
      ;
  }
}

export default Login;