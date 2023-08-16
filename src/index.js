import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4q0gk2U5hPiqQqTCY0jBEQjCqEf-exak",
  authDomain: "roggia-fanpage.firebaseapp.com",
  databaseURL: "https://roggia-fanpage-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roggia-fanpage",
  storageBucket: "roggia-fanpage.appspot.com",
  messagingSenderId: "974186095219",
  appId: "1:974186095219:web:cec14749750f2ff9e00006",
  measurementId: "G-1FDSYBB382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



