import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "DIN_API_KEY", // Erstatt med din API key
  authDomain: "DIN_AUTH_DOMAIN", // Erstatt med din Auth Domain
  projectId: "DIN_PROJECT_ID", // Erstatt med din Project ID
  storageBucket: "DIN_STORAGE_BUCKET", // Erstatt med din Storage Bucket
  messagingSenderId: "DIN_MESSAGING_SENDER_ID", // Erstatt med din Messaging Sender ID
  appId: "DIN_APP_ID" // Erstatt med din App ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
