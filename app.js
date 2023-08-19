
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    checkEmail();
});

function checkEmail(){
    const emailInput = document.getElementById('email');
    clearErrorMessage(); // Clear any existing error message

    if(!isValidEmail()){
        emailInput.classList.add('error');
        errorMessage();
    } else{
        emailInput.classList.remove('error');
        alert("Submitted successfully!");
    }
    emailInput.value="";
}

function isValidEmail(){
    const emailInput = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailInput);
}

function errorMessage(){
    const message = document.createElement('p');
    message.textContent = "Please provide a valid email address";
    document.getElementById("errorMessageContainer").appendChild(message);
}

function clearErrorMessage(){
    const errorMsgContainer = document.getElementById('errorMessageContainer');
    while (errorMsgContainer.firstChild){
        errorMsgContainer.removeChild(errorMsgContainer.firstChild);
    }
}