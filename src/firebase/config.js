import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALGuIbAKElJpsDY4nQzzt-WNpki4iRY0Q",
  authDomain: "coffee-shop-website-97315.firebaseapp.com",
  projectId: "coffee-shop-website-97315",
  storageBucket: "coffee-shop-website-97315.appspot.com",
  messagingSenderId: "489393948153",
  appId: "1:489393948153:web:ce97254216cf6109226928"
};

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
export {db};