import { initializeApp } from 'firebase/app'
import {
    getFirestore, doc, setDoc, addDoc, collection
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword
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


// Registering users
const suggestionsForm = document.querySelector('.suggestions')
suggestionsForm.addEventListener('submit', async (e) => {
    
    e.preventDefault()
    const name = suggestionsForm.name.value;
    const email = suggestionsForm.email.value;
    const message = suggestionsForm.message.value;

    const docRef = await addDoc(collection(db, 'suggestions'), {
        name: name,
        email: email,
        message: message
        
    })
    .then(() => {
        alert('Your Message Submitted!')
    })
    .catch((error) => {
        alert('Error Submitting Your Message');
    })

    // const userRef = doc(db, 'suggestions');
    // setDoc(userRef, {
    //     name: name,
    //     email: email,
    //     message: message
    // })

    //     .then(() => {
    //         alert('Your Message Submitted!')
    //     })
    //     .catch((error) => {
    //         alert('Error Submitting Your Message');
    //     });
})