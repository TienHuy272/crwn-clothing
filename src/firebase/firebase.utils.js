import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA6uHEEyMuXHrds-esrFuMvRviA4TwwRCo',
  authDomain: 'crwn-db-e4b9c.firebaseapp.com',
  databaseURL: 'https://crwn-db-e4b9c.firebaseio.com',
  projectId: 'crwn-db-e4b9c',
  storageBucket: 'crwn-db-e4b9c.appspot.com',
  messagingSenderId: '970829840475',
  appId: '1:970829840475:web:8514195a43276b0673ff7e',
  measurementId: 'G-4BZTCR4CMF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
