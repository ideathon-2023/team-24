import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection,
    addDoc, doc,
    getDoc, updateDoc, increment, Timestamp
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
// const docRef = await addDoc(collection(db, 'mail'), {
//     to: ['someone@example.com'],
//     message: {
//         subject: 'Hello from Firebase!',
//         html: 'This is an <code>HTML</code> email body.'
//     }
// });

console.log("heyyyyyyy")

const menu_monday = doc(db, 'menu', 'monday');
const menu_tuesday = doc(db, 'menu', 'tuesday');
const menu_wednesday = doc(db, 'menu', 'wednesday');
const menu_thursday = doc(db, 'menu', 'thursday');
const menu_friday = doc(db, 'menu', 'friday');
const menu_saturday = doc(db, 'menu', 'saturday');
const menu_sunday = doc(db, 'menu', 'sunday');
const mess_timings = doc(db, 'messTiming', 'timings');

getDoc(menu_monday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuMonday = snapshot.data();

        const mon_b = document.getElementById('mon_b');
        mon_b.textContent = menuMonday.breakfast;
        const mon_l = document.getElementById('mon_l');
        mon_l.textContent = menuMonday.lunch;
        const mon_ev = document.getElementById('mon_ev');
        mon_ev.textContent = menuMonday.eveningsnacks;
        const mon_d = document.getElementById('mon_d');
        mon_d.textContent = menuMonday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_tuesday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuTuesday = snapshot.data();

        const tue_b = document.getElementById('tue_b');
        tue_b.textContent = menuTuesday.breakfast;
        const tue_l = document.getElementById('tue_l');
        tue_l.textContent = menuTuesday.lunch;
        const tue_ev = document.getElementById('tue_ev');
        tue_ev.textContent = menuTuesday.eveningsnacks;
        const tue_d = document.getElementById('tue_d');
        tue_d.textContent = menuTuesday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_wednesday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuWednesday = snapshot.data();

        const wed_b = document.getElementById('wed_b');
        wed_b.textContent = menuWednesday.breakfast;
        const wed_l = document.getElementById('wed_l');
        wed_l.textContent = menuWednesday.lunch;
        const wed_ev = document.getElementById('wed_ev');
        wed_ev.textContent = menuWednesday.eveningsnacks;
        const wed_d = document.getElementById('wed_d');
        wed_d.textContent = menuWednesday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_thursday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuThursday = snapshot.data();

        const thu_b = document.getElementById('thu_b');
        thu_b.textContent = menuThursday.breakfast;
        const thu_l = document.getElementById('thu_l');
        thu_l.textContent = menuThursday.lunch;
        const thu_ev = document.getElementById('thu_ev');
        thu_ev.textContent = menuThursday.eveningsnacks;
        const thu_d = document.getElementById('thu_d');
        thu_d.textContent = menuThursday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_friday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuFriday = snapshot.data();

        const fri_b = document.getElementById('fri_b');
        fri_b.textContent = menuFriday.breakfast;
        const fri_l = document.getElementById('fri_l');
        fri_l.textContent = menuFriday.lunch;
        const fri_ev = document.getElementById('fri_ev');
        fri_ev.textContent = menuFriday.eveningsnacks;
        const fri_d = document.getElementById('fri_d');
        fri_d.textContent = menuFriday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_saturday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuSaturday = snapshot.data();

        const sat_b = document.getElementById('sat_b');
        sat_b.textContent = menuSaturday.breakfast;
        const sat_l = document.getElementById('sat_l');
        sat_l.textContent = menuSaturday.lunch;
        const sat_ev = document.getElementById('sat_ev');
        sat_ev.textContent = menuSaturday.eveningsnacks;
        const sat_d = document.getElementById('sat_d');
        sat_d.textContent = menuSaturday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});


getDoc(menu_sunday).then((snapshot) => {
    if (snapshot.exists()) {
        const menuSunday = snapshot.data();

        const sun_b = document.getElementById('sun_b');
        sun_b.textContent = menuSunday.breakfast;
        const sun_l = document.getElementById('sun_l');
        sun_l.textContent = menuSunday.lunch;
        const sun_ev = document.getElementById('sun_ev');
        sun_ev.textContent = menuSunday.eveningsnacks;
        const sun_d = document.getElementById('sun_d');
        sun_d.textContent = menuSunday.dinner;
    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});

getDoc(mess_timings).then((snapshot) => {
    if (snapshot.exists()) {
        const messTimings = snapshot.data();

        const time_b = document.getElementById('time_b');
        time_b.textContent = `Timings: ${messTimings.breakfast}`;

        const time_b_h = document.getElementById('time_b_h');
        time_b_h.textContent = `Holiday Timings: ${messTimings.breakfast_h}`;

        const time_l = document.getElementById('time_l');
        time_l.textContent = `Timings: ${messTimings.lunch}`;

        const time_l_h = document.getElementById('time_l_h');
        time_l_h.textContent = `Holiday Timings: ${messTimings.lunch_h}`;

        const time_ev = document.getElementById('time_ev');
        time_ev.textContent = `Timings: ${messTimings.eveningsnacks}`;

        const time_ev_h = document.getElementById('time_ev_h');
        time_ev_h.textContent = `Holiday Timings: ${messTimings.eveningsnacks_h}`;

        const time_d = document.getElementById('time_d');
        time_d.textContent = `Timings: ${messTimings.dinner}`;

        const time_d_h = document.getElementById('time_d_h');
        time_d_h.textContent = `Holiday Timings: ${messTimings.dinner_h}`;


    } else {
        console.log("User document not found");
    }
}).catch((error) => {
    console.log("Error getting user document:", error);
});





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



onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        const form = document.querySelector('#booking'); // Use # to select by id
        const submitButton = form.querySelector('button[type="submit"]');

        // Retrieve the timestamp from Firestore
        const userDocRef = doc(db, 'users', uid);
        const userDocSnapshot = await getDoc(userDocRef);
        const lastSubmissionTimestamp = userDocSnapshot.get('lastSubmissionTimestamp');

        if (lastSubmissionTimestamp) {
            const now = Timestamp.now();
            const isSameDay = Timestamp.fromMillis(lastSubmissionTimestamp.toMillis()).toDate().toDateString() === now.toDate().toDateString();

            if (isSameDay) {
                submitButton.disabled = true;
            }
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission

            const mealMap = {
                'option1': 'Breakfast',
                'option2': 'Lunch',
                'option3': 'Evening Snacks',
                'option4': 'Dinner'
            };

            // Calculate the number of checkboxes checked
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const checkedMeals = [];
            let checkedCount = 0;
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    checkedCount++;
                    const mealName = mealMap[checkbox.value];
                    checkedMeals.push(mealName);
                }
            });

            // Update the "fees" field and set the lastSubmissionTimestamp
            const feesRef = doc(db, 'users', uid); // Replace with your actual collection and document ID
            await updateDoc(feesRef, {
                fees: increment(checkedCount),
                lastSubmissionTimestamp: Timestamp.now()
            });

            submitButton.disabled = true; // Disable the submit button after submission
            alert(`${checkedCount} meals booked for tomorrow`);

            const userRef = doc(db, 'users', uid)
            getDoc(userRef).then(async (snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.data();
                    const userEmail = userData.email; // Access the "fees" field
                    // Do something with the user's information
                    const currentDate = new Date();
                    const tomorrowDate = new Date(currentDate);
                    tomorrowDate.setDate(currentDate.getDate() + 1);
                    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
                    const formattedTomorrowDate = tomorrowDate.toLocaleString('en-US', options);
                    const docRef = await addDoc(collection(db, 'email'), {
                        to: [userEmail],
                        message: {
                            subject: `Your meals on ${formattedTomorrowDate}`,
                            html: `
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Meal Booking Ticket</title>
                            </head>
                            <body>
                                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; width: 300px; margin: 0 auto; text-align: center; font-family: Arial, sans-serif; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                                    <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Meal Booking Confirmation</div>
                                    <div style="font-size: 14px;">
                                        You have booked:<br>
                                        <strong>${checkedMeals.join(', ')}</strong><br>
                                        for<br>
                                        <strong>${formattedTomorrowDate}</strong><br><br>
                                        Please present this ticket to collect your meals.
                                    </div>
                                </div>
                            </body>
                            </html>
                        `
                        }
                    });

                } else {
                    console.log("User document not found");
                }
            }).catch((error) => {
                console.log("Error getting user document:", error);
            });
        });
    }
});




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        const userRef = doc(db, 'users', uid)

        getDoc(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.data();
                const userFees = userData.fees; // Access the "fees" field
                // Do something with the user's information
                const userNameLink = document.getElementById('totalFees');
                userNameLink.textContent = userFees * 60;
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

