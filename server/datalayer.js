
import React from 'react';
import {
    collection,
    get,
    getDocs,
    doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const APIKey = process.env.REACT_APP_WEATHER_API_KEY;

const firebaseConfig = {
    apiKey: "AIzaSyDGQcgtEnlU8LHWYexNgjsPXSvMoRUc-tM",
    authDomain: "test-9e54f.firebaseapp.com",
    projectId: "test-9e54f",
    storageBucket: "test-9e54f.appspot.com",
    messagingSenderId: "802074267213",
    appId: "1:802074267213:web:1ef626d112f19471231604",
    measurementId: "G-33X104QTRB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
//getAuth fetches a reference to the authentication service
//requires the data objects - they are fetched from firestore here

const citiesRef = db.collection('cities');

citiesRef.forEach((doc) => { console.log(doc.id) });
/**`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next5days?key=${APIKey}` */

//specify new doc id like this:
await db.collection('cities').doc('new-city-id').set(data);
//function for adding data
const data = {}
const res = db.collection('cities').doc('helsinki').set(data, { merge: true });


const city = 'helsinki';
fetch('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=400&explaintext&titles=Helsinki&format=json')
    .then((response) => response.json())
    .then((data) => console.log(data));


export {
    db, app, auth
}
    //export functions that will be used by the client


