import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAFwEa6m4ATvBRxNZlM16HTWaeX0w0uuiQ",
  authDomain: "fenrir-blog.firebaseapp.com",
  databaseURL: "https://fenrir-blog.firebaseio.com",
  projectId: "fenrir-blog",
  storageBucket: "fenrir-blog.appspot.com",
  messagingSenderId: "600993391383",
  appId: "1:600993391383:web:ca1750d6c5ac1580"
});

export const db = firebase.firestore();