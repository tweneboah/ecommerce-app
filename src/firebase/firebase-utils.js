import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlh7snMhvcNbjPLmT9ueFOZ_5AoLtdc1o",
    authDomain: "ecommerce-app-e361e.firebaseapp.com",
    databaseURL: "https://ecommerce-app-e361e.firebaseio.com",
    projectId: "ecommerce-app-e361e",
    storageBucket: "ecommerce-app-e361e.appspot.com",
    messagingSenderId: "611029030831",
    appId: "1:611029030831:web:c1c698cd79a24aab86015a",
    measurementId: "G-LRT60M76MT"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth(); //We will import anywhere we need authentication i our application

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

