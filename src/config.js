import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAiEk_V2MslUvNsQFf1dE9gZLq3W46Sf3s",
    authDomain: "hellochemo.firebaseapp.com",
    projectId: "hellochemo",
    storageBucket: "hellochemo.appspot.com",
    messagingSenderId: "641034749316",
    appId: "1:641034749316:web:d08b02fb087a389eaf09d1",
    measurementId: "G-RE0QYDZH8D"
  };

var fire = firebase.initializeApp(config);

  
export default fire;