import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzi6UL4n2-Se3eSqrjs5QzBL2VfJUGos",
  authDomain: "udemy-react-http-f5849.firebaseapp.com",
  databaseURL: "https://udemy-react-http-f5849-default-rtdb.firebaseio.com",
  projectId: "udemy-react-http-f5849",
  storageBucket: "udemy-react-http-f5849.appspot.com",
  messagingSenderId: "521246134773",
  appId: "1:521246134773:web:dc8db799f7abcb1bcc50bc",
  measurementId: "G-CCQZYVZJ7H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
