import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA90dqs_RnnZo_95lAgLYK-KkC40LQ9N8A",
  authDomain: "kodigo-todo.firebaseapp.com",
  projectId: "kodigo-todo",
  storageBucket: "kodigo-todo.firebasestorage.app",
  messagingSenderId: "525704791386",
  appId: "1:525704791386:web:672ebb112252aab20d1f63",
  measurementId: "G-QZGNZC2K2K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };