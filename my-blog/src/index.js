import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyHmLl4UD9T4rfMblsBgXfb4WQh_8kSI8",
  authDomain: "my-react-blog-42378.firebaseapp.com",
  projectId: "my-react-blog-42378",
  storageBucket: "my-react-blog-42378.appspot.com",
  messagingSenderId: "571895785129",
  appId: "1:571895785129:web:73db5db8e49b62d382abb8"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);