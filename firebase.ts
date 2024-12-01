import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC84WHTogcIsso9qa96YrtaRJbS3m2ZYhQ",
  authDomain: "portfolio-333c2.firebaseapp.com",
  projectId: "portfolio-333c2",
  databaseURL: "https://portfolio-333c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "portfolio-333c2.firebasestorage.app",
  messagingSenderId: "131024612077",
  appId: "1:131024612077:web:2c8ef56441fd516cccbae4",
  measurementId: "G-7PY2FXZ417"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);