// assigns the authorization app to an easily typed variable bc im lazy
let auth = firebase.auth(); 

// handles login button press 
function toggleSignIn() {
    // if user is logged in already, logs them out 
    if (auth.currentUser) {
        auth.signOut(); 
    } else {
        // gets email and password from submitted form 
        let email = document.getElementById('email').value; 
        let password = document.getElementById('password').value; 
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // handles sign in errors here 
            let errorCode = error.code; 
            let errorMessage = error.message; 
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.'); 
            } else {
                alert(errorMessage); 
            }
            console.log(error); 
        })
    }
}

// handles sign up button press 
function handleSignUp() {
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    // creates user with email and password gathered above 
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // handles error here 
        let errorCode = error.code; 
        let errorMessage = error.message; 
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.'); 
        } else {
            alert(errorMessage); 
        }
        console.log(error); 
    })
    toggleSignIn(); 
}

// handles logging in with google 
function toggleSignInWithGoogle() {
    // if person isn't already logged in 
    if (!auth.currentUser) {
        let provider = new firebase.auth.GoogleAuthProvider(); 
        // signs user in 
        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API. 
            let token = result.credential.accessToken; 
            let user = result.user; 
        }).catch(function(error) {
            // handles errors 
            let errorCode = error.code; 
            let errorMessage = error.message; 
            // The provider account's email address 
            let email = error.email; 
            // the pending google credential 
            let credential = error.credential; 
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.'); 
                // hande linking user accounts signed up with multiple auth providers here 
                // User's email already exists.
                // Asks the user their password.
                var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                auth.signInWithEmailAndPassword(email, password).then(function(user) {
                    user.linkWithCredential(credential);
                });
            } else {
                console.log(error); 
            }
        });
    } else {
        auth.signOut(); 
    }
}

// TODO still needs to be implemented 
function promptUserForPassword() {

}

// renders login with google button *******************************************************************************************
    function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
  // ******************************************************************************************************************************8

function handleResetEmail() {
    let emailAddress = document.getElementById('resetEmail').value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        window.location.href="C:\Users\13144\Documents\GitHub\Comp426Final\public\index.html"; 
    }).catch(function(error) {
        // handle errors here
        alert(error.message); 
    });
}

$(function() {
    $(document).on('click', '#loginSubmit', toggleSignIn); 
    $(document).on('click', '#createAccount', handleSignUp);  
    $(document).on('click', '#my-login2', toggleSignInWithGoogle); 
    $(document).on('click', '#sendResetEmail', handleResetEmail); 
})