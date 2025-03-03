// Variables for Sign in and Create Account Forms
let signInForm = document.getElementById('sign-in-form')
let createAccountForm = document.getElementById('create-acc-form')

let haveAccount = document.getElementById('i-have-acc')
let newAccountPlz = document.getElementById('create-acc-plz')


// Hidden items

//Welcome section - hidden items
signInForm.hidden = true;
createAccountForm.hidden = true;


// Reveal sign in and create account forms functions - Reformat anonymous functions to event handler functions

haveAccount.onclick = function(){
    signInForm.hidden = false;
    createAccountForm.hidden = true;
}

newAccountPlz.onclick = function() {
    createAccountForm.hidden= false;
    signInForm.hidden=true;
}


