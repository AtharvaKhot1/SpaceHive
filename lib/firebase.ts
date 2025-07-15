import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwzaIzTyVw23RE80MstigF-pJGAwyaF9k",
  authDomain: "spacehive-963d4.firebaseapp.com",
  projectId: "spacehive-963d4",
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app); 