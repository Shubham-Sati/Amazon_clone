import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdc1yT8U0IWg18NZvFfcB2zEJngQ7gRyg",
  authDomain: "clone-dd7e5.firebaseapp.com",
  projectId: "clone-dd7e5",
  storageBucket: "clone-dd7e5.appspot.com",
  messagingSenderId: "738226812067",
  appId: "1:738226812067:web:f9f9fd83b068ba59383b16",
  measurementId: "G-QTQ6Z0Y7M6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
