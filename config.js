import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyADkSN41PO5BBArMHLM3BJy-sBCe6enKjQ',
  authDomain: 'attendance-app-2eb4a.firebaseapp.com',
  databaseURL: 'https://attendance-app-2eb4a-default-rtdb.firebaseio.com',
  projectId: 'attendance-app-2eb4a',
  storageBucket: 'attendance-app-2eb4a.appspot.com',
  messagingSenderId: '870319241867',
  appId: '1:870319241867:web:a1c7297ee5726e8626b28e',
});

export default firebase.database();
