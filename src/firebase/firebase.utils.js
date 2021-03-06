import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDF7sSbHLeZhhZQpAndyGdgQF_ev3bWAwk',
  authDomain: 'crown-db-9d494.firebaseapp.com',
  projectId: 'crown-db-9d494',
  storageBucket: 'crown-db-9d494.appspot.com',
  messagingSenderId: '405022776309',
  appId: '1:405022776309:web:a055f7bac629a8db5e1ebc',
  measurementId: 'G-XZ58Q3SP6L',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
