import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCi0jQDgGXE4-nh4gW7-2nWx_aUXek1NgQ",
  authDomain: "crud-project-1dcfe.firebaseapp.com",
  projectId: "crud-project-1dcfe",
  storageBucket: "crud-project-1dcfe.appspot.com",
  messagingSenderId: "849432844176",
  appId: "1:849432844176:web:200395fffc9e128c1e4515",
  measurementId: "G-9MBLCSDXNT"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
