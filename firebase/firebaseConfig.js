import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "boundless-co.firebaseapp.com",
  projectId: "boundless-co",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: "177429614411",
  appId: "1:177429614411:web:7675d4340648d4500de2ce",
  measurementId: "G-ZS4V7W7V6F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
