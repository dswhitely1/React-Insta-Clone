import React from 'react';

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

const HOCApp = withAuthenticate(PostsPage)(Login);

const App = () => <HOCApp/>;

export default App;
