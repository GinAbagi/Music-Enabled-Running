import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAWZwiCV1ypkd42qZE-tOX08Tm-ic4XqL4",
    authDomain: "pearrun-a0050.firebaseapp.com",
    projectId: "pearrun-a0050",
    storageBucket: "pearrun-a0050.appspot.com",
    messagingSenderId: "704754843281",
    appId: "1:704754843281:web:b0e8666cf9e9d515b04930",
    measurementId: "G-420CLZ3VBX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;