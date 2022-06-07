// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey, 
//   authDomain:process.env.REACT_APP_authDomain, 
//   projectId:process.env.REACT_APP_projectId, 
//   storageBucket:process.env.REACT_APP_storageBucket, 
//   messagingSenderId:process.env.REACT_APP_messagingSenderId, 
//   appId:process.env.REACT_APP_appId, 
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkYf1XQzZhbdruGWWtX0F4zth2JQ0SQPA",
  authDomain: "genius-car-services-d8e4d.firebaseapp.com",
  projectId: "genius-car-services-d8e4d",
  storageBucket: "genius-car-services-d8e4d.appspot.com",
  messagingSenderId: "697784188421",
  appId: "1:697784188421:web:d54bf80451cf16b237a66c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;