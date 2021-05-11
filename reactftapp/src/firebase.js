import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "socialfbapp-b0154.firebaseapp.com",
	projectId: "socialfbapp-b0154",
	storageBucket: "socialfbapp-b0154.appspot.com",
	messagingSenderId: "9654447737",
	appId: process.env.APP_ID,
	measurementId: "G-62X7REJ2H9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();
// authentication
const auth = firebase.auth();
// to store our app on firebase :)
const storage = firebase.storage();

export { dataBase, auth, storage };
