import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPPATC2OXKFH035PoeT-gJ0QnlkOiJChY",
  authDomain: "whye-295c9.firebaseapp.com",
  authDomain: "https://whye-295c9.firebaseio.com",
  projectId: "whye-295c9",
  storageBucket: "whye-295c9.appspot.com",
  messagingSenderId: "206954439977",
  appId: "1:206954439977:web:2b19245c02bd8ed5a70338"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   