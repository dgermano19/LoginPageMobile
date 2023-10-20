const email = document.getElementById("emailField");
const password = document.getElementById("passwordField");
const submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", function(){
    event.preventDefault();
    document.getElementById("demo").innerHTML = email.value+", "+password.value;
});