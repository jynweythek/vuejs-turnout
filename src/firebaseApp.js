import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCPSCLKjTBjk1bHTHm0PoW5anbyg1fRou8",
  authDomain: "turnout-97ab1.firebaseapp.com",
  databaseURL: "https://turnout-97ab1.firebaseio.com",
  projectId: "turnout-97ab1",
  storageBucket: "turnout-97ab1.appspot.com",
  messagingSenderId: "609356997239"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');