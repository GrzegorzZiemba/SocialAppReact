import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA5Pj_Aeh6CIU4jexdhGr3d5cMczAbTXIo",
	authDomain: "socialfbapp-b0154.firebaseapp.com",
	projectId: "socialfbapp-b0154",
	storageBucket: "socialfbapp-b0154.appspot.com",
	messagingSenderId: "9654447737",
	appId: "1:9654447737:web:4c1adef93a0cabf9962ea8",
	measurementId: "G-62X7REJ2H9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dataBase = firebaseApp.firestore();
// authentication
const auth = firebase.auth();
// to store our app on firebase :)
const storage = firebase.storage();

export { dataBase, auth, storage };
