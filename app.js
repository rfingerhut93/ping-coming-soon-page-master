
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    checkEmail();
});

function checkEmail(){
    const errorMsgContainer = document.getElementById('errorMessageContainer');
    const message = document.createElement('p');
    clearErrorMessage(); // Clear any existing error message

    if(isValidEmail()){
        message.textContent = "Yay! It worked!";
    }
    else {
        message.textContent = "Not a valid email address."
    }
    errorMsgContainer.appendChild(message);

}

function isValidEmail(){
    const emailInput = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailInput);
}

function errorMessage(){
    const message = document.createElement('p');
    message.textContent = "Not valid email";
    document.getElementById("errorMessageContainer").appendChild(message);
}

function clearErrorMessage(){
    const errorMsgContainer = document.getElementById('errorMessageContainer');
    while (errorMsgContainer.firstChild){
        errorMsgContainer.removeChild(errorMsgContainer.firstChild);
    }
}