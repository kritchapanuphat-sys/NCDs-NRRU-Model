// ============================================================
// lib/firebase.js  –  Firebase Initialization
// ============================================================
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// 🔧 TODO: Replace these values with your new Firebase project credentials
// Go to: https://console.firebase.google.com → Project Settings → Your apps → Config
export const firebaseConfig = {
  apiKey: "AIzaSyAVFQjoyrXmAMVjiFi7pVSc6kjcNbSZ5zs",
  authDomain: "ncds-nrru-model.firebaseapp.com",
  projectId: "ncds-nrru-model",
  storageBucket: "ncds-nrru-model.firebasestorage.app",
  messagingSenderId: "311181833303",
  appId: "1:311181833303:web:ce9beb50c99ec419a0df12",
  measurementId: "G-5N47JWFHXK"
};

// 🔧 TODO: Replace with your Gemini API Key
// Go to: https://aistudio.google.com/app/apikey
// Gemini calls are proxied through /api/analyze-food.
// Set GEMINI_API_KEY in your Vercel environment variables.

// 🔧 TODO: Replace with your admin UIDs (LINE UIDs or Firebase UIDs)
export const ADMIN_UIDS = ["YiTX5zH3sjTCF3mcI89XOJNuEES2"];

// 🔧 TODO: Replace with your LINE LIFF App IDs (one per page)
export const LIFF_IDS = {
  food:     "2010193143-qWlcNQvm",
  health:   "2010193143-NArSN2nA",
  missions: "2010193143-YQQsLSBm",
  profile:  "2010193143-zOvNWpSG",
  login:    "2010193143-N1egSfWo",
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
