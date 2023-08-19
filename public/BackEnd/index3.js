import { initializeApp } from 'firebase/app'
import {
    getFirestore, doc,
    getDoc, setDoc
} from 'firebase/firestore'
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
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
console.log('hello duniya');
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
            alert(err.message)
        })
})



const google = document.querySelector('.googleLogin');
google.addEventListener('click', async (e) => {
    e.preventDefault();

    const googleProvider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const userId = user.uid;

        const userRef = doc(db, 'users', userId);

        getDoc(userRef).then(async (snapshot) => {
            if (snapshot.exists()) {
                window.location.href = '/FrontEnd/StudentEnd/campusPlatesInside.html';
            } else {
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email
                });
                console.log('User information stored successfully!');
                window.location.href = '/FrontEnd/StudentEnd/campusPlatesInside.html';
            }
        }).catch((error) => {
            alert(`Error getting user document: ${error}`);
        });

        // const docSnapshot = await getDoc(userRef);
        // if (!docSnapshot.exists()) {
        //     // Document doesn't exist, set user information
        //     await setDoc(userRef, {
        //         name: user.displayName,
        //         email: user.email
        //     });
        //     console.log('User information stored successfully!');
        // }

        // Redirect after processing
        // window.location.href = '/FrontEnd/StudentEnd/campusPlatesInside.html';
    } catch (error) {
        const errorMessage = error.message;
        alert(`Login error: ${errorMessage}`);
    }
});