import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc,
    onSnapshot,
    query, where,
    orderBy, serverTimestamp,
    getDoc, setDoc
} from 'firebase/firestore'
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAcNENZXOaOKxE6Edegvv7FOZwzUf53jag",
    authDomain: "campusplates.firebaseapp.com",
    projectId: "campusplates",
    storageBucket: "campusplates.appspot.com",
    messagingSenderId: "323546081685",
    appId: "1:323546081685:web:b106f161d4834d4c7dae9c"
};


//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const auth = getAuth()



//login
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            window.location.href = '/FrontEnd/StudentEnd/campusPlatesInside.html';
        })
        .catch((err) => {
            console.log(err.message)
        })
})