import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')


 
  firebase.initializeApp({
    apiKey: "AIzaSyBVfPc6PM6uRv6xoJI9Vo5FvGmjfRrxeT0",
    authDomain: "evernote-410b8.firebaseapp.com",
    databaseURL: "https://evernote-410b8.firebaseio.com",
    projectId: "evernote-410b8",
    storageBucket: "evernote-410b8.appspot.com",
    messagingSenderId: "102777738838",
    appId: "1:102777738838:web:d0073ad57b487c86"
  })


ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
