import React, { Component } from 'react';

const withAuthenticate = PostsPage => Login =>
  class extends Component {
    state = {
      isLoggedIn: false,
    };

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    }

    handleLogOut = () => {
      console.log('i was called');
      if (localStorage.getItem('username')) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    };

    render() {
      return this.state.isLoggedIn ? <PostsPage logOut={this.handleLogOut}/> :
        <Login/>;
    }

  };

export default withAuthenticate;