// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
    apiKey: "AIzaSyBTzohR4W-LpY3P1CrQEdrzaAJWS_t-b_U",
    authDomain: "quasar-chat-7bcc3.firebaseapp.com",
    databaseURL: "https://quasar-chat-7bcc3.firebaseio.com",
    projectId: "quasar-chat-7bcc3",
    storageBucket: "quasar-chat-7bcc3.appspot.com",
    messagingSenderId: "801655834989",
    appId: "1:801655834989:web:5087e77443ecec46d03264",
    measurementId: "G-0WHB4ELPJM"

};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
