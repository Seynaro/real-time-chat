import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
    apiKey: "AIzaSyCws8HGK2qCpHoIVilZAS6SORixZYGA9dI",
    authDomain: "chat-react-e3371.firebaseapp.com",
    projectId: "chat-react-e3371",
    storageBucket: "chat-react-e3371.appspot.com",
    messagingSenderId: "685737451980",
    appId: "1:685737451980:web:d2865becf047b318b3fd69",
    measurementId: "G-5K52KZ56TG"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore,
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
