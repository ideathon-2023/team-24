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
const signupForm = document.querySelector('.register')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = signupForm.name.value;
    const SID = signupForm.SID.value;
    const phone = signupForm.phone.value;
    const gender = signupForm.gender.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirmPassword.value;

    if (password !== confirmPassword) {
        console.log('Passwords do not match. Please try again.');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            const userId = cred.user.uid;

            const userRef = doc(db, 'users', userId);
            setDoc(userRef, {
                name: name,
                phone: phone,
                email: email,
                gender: gender,
                SID: SID
            })

                .then(() => {
                    console.log('User information stored successfully!');
                    signupForm.reset(); // Reset the form after successful signup

                    window.location.href = '/FrontEnd/StudentEnd/campusPlatesInside.html';
                })
                .catch((error) => {
                    console.log('Error storing user information:', error.message);
                });



        })
        .catch((err) => {
            console.log(err.message)
        })
})


