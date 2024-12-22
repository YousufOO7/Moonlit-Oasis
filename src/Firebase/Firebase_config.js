// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYOgK7FdcNUK2I5xpi-j_iL0w-7oK_J1I",
  authDomain: "room-booking-75e27.firebaseapp.com",
  projectId: "room-booking-75e27",
  storageBucket: "room-booking-75e27.firebasestorage.app",
  messagingSenderId: "848957580530",
  appId: "1:848957580530:web:21a23d407d0eae87b69c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;