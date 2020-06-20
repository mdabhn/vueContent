import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyB4rGHOpU5_WrLJ5g3hpVc9dyPoVPngbFU',
  authDomain: 'fir-auth-506e8.firebaseapp.com',
  databaseURL: 'https://fir-auth-506e8.firebaseio.com',
  projectId: 'fir-auth-506e8',
  storageBucket: 'fir-auth-506e8.appspot.com',
  messagingSenderId: '968391338675',
  appId: '1:968391338675:web:a1b27e8c79d67ffa1b9ec6',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
