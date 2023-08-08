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
    signOut,
    onAuthStateChanged
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

const user = auth.currentUser;

// console.log("Hello world")
// if (user) {
//     const uid = user.uid;

//     const userRef = doc(db, 'users', uid)

//     getDoc(userRef).then((snapshot) => {
//         if (snapshot.exists()) {
//             const userData = snapshot.data();
//             const userName = userData.name; // Access the "name" field
//             const userSID = userData.SID; // Access the "sid" field
//             // Do something with the user's information
//             console.log("User Name:", userName);
//             console.log("User SID:", userSID);
//         } else {
//             console.log("User document not found");
//         }
//     }).catch((error) => {
//         console.log("Error getting user document:", error);
//     });





// } else {
//   // No user is signed in.
//   console.log("No user signed in")
// }

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const userRef = doc(db, 'users', uid)

    getDoc(userRef).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.data();
            const userName = userData.name; // Access the "name" field
            const userSID = userData.SID; // Access the "sid" field
            // Do something with the user's information
            const userNameLink = document.getElementById('userNameLink');
                userNameLink.textContent = `Name - ${userName}`;
                const userSIDLink = document.getElementById('userSIDLink');
                userSIDLink.textContent = `SID - ${userSID}`;
        } else {
            console.log("User document not found");
        }
    }).catch((error) => {
        console.log("Error getting user document:", error);
    });
    } else {
        console.log('Noooo users')
    }
  });







const logoutLink = document.querySelector(".logoutLink");
logoutLink.addEventListener('click', (e) => {
    console.log("Clicked")
    e.preventDefault();

    // Perform user logout using Firebase
    signOut(auth)
        .then(() => {
            // Redirect to the desired page after successful logout
            window.location.href = '/FrontEnd/HomePage/index.html';
        })
        .catch((error) => {
            console.log('Logout error:', error.message);
        });
});

