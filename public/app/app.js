function initFirebase() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("connected");

        } else {
            console.log("user is not there");
        }
    })
}

// function createUser() {
//     let password = "password";
//     let email = "ringjat4@gmail.com";
//     let fName = "Ring";
//     let lName = "Sumlut";

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//             console.log(errorMessage);
//         });
// }

// function login() {
//     let password = "password";
//     let email = "ringjat4@gmail.com";

//     firebase.auth().signInWithCustomToken(token)
//         .then((userCredential) => {
//             // Signed in
//             var user = userCredential.user;
//             console.log("Signed In");
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ...
//             console.log(errorMessage);
//         });
// }

// function signOut() {
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//         console.log("Signed Out");
//     }).catch((error) => {
//         // An error happened.

//     });

// }

// function initListeners() {
//     $(".loginButton").click(function (e) {
//         e.preventDefault();
//         let btnID = e.currentTarget.id;
//         if (btnID == "create") {
//             createUser();

//         } else if (btnID == "login") {
//             login()

//         } else if (btnID == "signout") {
//             signOut()

//         }
//     })
// }


// $(document).ready(function () {
//     try {
//         let app = firebase.app();
//         initFirebase();
//         //initListeners();
//     } catch {
//         console.error(e);
//     }
// })


const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = signUpForm['firstname'].value;
    const lastname = signUpForm['lastname'].value;
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log("First Name: " + firstname + ",", "Last Name: " + lastname + ",", "Email: " + email);
        alert("Welcome " + firstname)
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorMessage);
    });

})

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm['signin-email'].value;
    const password = signInForm['signin-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        alert("Signed In ")
    })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
        });

})


