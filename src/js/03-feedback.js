import throttle from 'lodash.throttle';
const localKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textArea = document.querySelector("textarea");
const emailInput = document.querySelector("input[type='email']");

populateTextarea();

form.addEventListener('submit', textSubmit);
textArea.addEventListener('input', throttle(textInput, 500));
emailInput.addEventListener('input', throttle(textInput, 500));

function textSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(localKey);
    console.log(formData)
    formData = {};
}
let formData = {};

function textInput(event) {
     formData = {
        email: emailInput.value,
        message: textArea.value,
    }
    localStorage.setItem(localKey, JSON.stringify(formData));
}


function populateTextarea(){
    const savedMessage = localStorage.getItem(localKey);
    if (savedMessage) {
       const { email, message } = JSON.parse(savedMessage);
        textArea.value = message;
        emailInput.value = email;
    }
}