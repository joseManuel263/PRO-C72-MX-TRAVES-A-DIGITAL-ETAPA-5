import firebase from "firebase";

//Pega tu configuración de firebase aquí

const firebaseConfig = {
  apiKey: "AIzaSyCPd1Myb-0ALdBdWtrAQwYUffBQRaabKbo",
  authDomain: "travesia-digital-6e5cd.firebaseapp.com",
  projectId: "travesia-digital-6e5cd",
  storageBucket: "travesia-digital-6e5cd.appspot.com",
  messagingSenderId: "844657462590",
  appId: "1:844657462590:web:4b9961051e488199c6306f"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig); 
}
export default firebase.database();