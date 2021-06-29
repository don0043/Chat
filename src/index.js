import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

//файрстор конфиг
firebase.initializeApp({
    apiKey: "AIzaSyDIpGv-Al8FqikuTRFO2A1hF-aGpah0C1g",
    authDomain: "chatik-6b483.firebaseapp.com",
    projectId: "chatik-6b483",
    storageBucket: "chatik-6b483.appspot.com",
    messagingSenderId: "290803198799",
    appId: "1:290803198799:web:8cf0ada107bae343c1f33a",
    measurementId: "G-FHRKS79C5R"
});

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()
ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{    //создали контекст провайдер для того чтоб передать его в дочерние компоненты
          firebase,
          auth,
          firestore
      }}>
          <App />
      </Context.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

