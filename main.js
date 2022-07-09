let userPassword = document.querySelector("#upassword");
let confirmPassword = document.querySelector("#cpassword");
let errorMessage =  document.querySelector(".error-message");
let button = document.querySelector(".submit");


button.addEventListener('click', () => {
    if(userPassword.value !== confirmPassword.value)
    {
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "*Password do not match";
        userPassword.setAttribute('style','border:1px solid red;')
        confirmPassword.setAttribute('style','border:1px solid red;');
    }
});
