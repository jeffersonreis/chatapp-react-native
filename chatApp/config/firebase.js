import { initializeApp } from "firebase/app";
import { getAuth, getauth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Constants } from "expo-constants";

// Firebase Config
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
    databaseURL: Constants.manifest.extra.databaseURL,
};

// initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();