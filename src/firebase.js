import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-Ghnuzesj2u25wA1qq3LLTdbFBVeneyc",
    authDomain: "tinder-clone-d930f.firebaseapp.com",
    projectId: "tinder-clone-d930f",
    storageBucket: "tinder-clone-d930f.appspot.com",
    messagingSenderId: "394577663985",
    appId: "1:394577663985:web:dbe81a968e49df1df9d650",
    measurementId: "G-V09MMFQT64"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
