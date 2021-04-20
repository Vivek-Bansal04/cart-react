import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA7k3Phtd3qIthb0ag82QV65h_snsq1CA",
  authDomain: "cart-be018.firebaseapp.com",
  projectId: "cart-be018",
  storageBucket: "cart-be018.appspot.com",
  messagingSenderId: "701731079043",
  appId: "1:701731079043:web:3aa4be705584549f29acb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


