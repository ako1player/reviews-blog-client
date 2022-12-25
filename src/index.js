import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIc8YmWntB6zjLvD30JFiIhI7XGWKhrcU",
  authDomain: "my-review-blog.firebaseapp.com",
  projectId: "my-review-blog",
  storageBucket: "my-review-blog.appspot.com",
  messagingSenderId: "495803852235",
  appId: "1:495803852235:web:11d2311bd05f1793bb824e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

