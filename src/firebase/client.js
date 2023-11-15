import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyAqACmo4RLKr87EUskMaZWXYG2uRJ0Opms",
    authDomain: "proyecto-znt77.firebaseapp.com",
    projectId: "proyecto-znt77",
    storageBucket: "proyecto-znt77.appspot.com",
    messagingSenderId: "201784388021",
    appId: "1:201784388021:web:c9a5d31a219938bf6291fc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);