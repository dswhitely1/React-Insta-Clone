import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
// import './index.scss';
import App from './App';


library.add(fab, faCompass, faHeart, faUser);
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

