// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqjF45LcMCtv-moM9NFjheOxYtkQwEMWo",
    authDomain: "todo-app-5d707.firebaseapp.com",
    projectId: "todo-app-5d707",
    storageBucket: "todo-app-5d707.appspot.com",
    messagingSenderId: "568459115180",
    appId: "1:568459115180:web:4e43e0bd39e4f7926c3d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;