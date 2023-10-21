const email = document.getElementById("emailField");
const password = document.getElementById("passwordField");
const submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", function(event){
    //Impede que a página reinicie automaticamente ao tocar no botão
    event.preventDefault();

    if( email.value !="" && password.value !=""){
        if( email.value=="mymail@mail.com" && password.value=="admin"){
            window.location.href = "homePage.html";
        }else{ alert("wrong data");}
    }else{ alert("empty fields");}


});