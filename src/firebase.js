
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS-DbIXbKLcqnth9Zkqq0lmD02VVbJhgg",
  authDomain: "chat-fc7cc.firebaseapp.com",
  projectId: "chat-fc7cc",
  storageBucket: "chat-fc7cc.appspot.com",
  messagingSenderId: "562385006634",
  appId: "1:562385006634:web:7a13edfca066733321d353"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();