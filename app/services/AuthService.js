 import firebase from 'firebase';

export const authenticate = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const unAuthenticate = () => {
  return firebase.auth().signOut();
};