function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
};

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
};

const form = document.getElementById('form');
const listInput = document.querySelectorAll(".form-control");
const myName = document.getElementById("nombre")
const surName = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password1");
const confirmPassword = document.getElementById("password2");
const acceptTerms = document.getElementById("aceptoTerminos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    listInput.forEach(element => {
        element.lastElementChild.innerHTML = "";
    });

    if (myName.value.length < 1 || myName.value.trim() == "") {
      showAlertError();
    }else{
        showAlertSuccess()
    }
    if (surName.value.length < 1 || surName.value.trim() == "") {
        showAlertError();
      }else{
        showAlertSuccess()
      }
      if (email.value.length < 1 || email.value.trim() == "") {
        showAlertError();
      }else{
        showAlertSuccess()
      }
      if (password.value.length < 6 || password.value.trim() == "") {
        showAlertError();
      } else{
        showAlertSuccess()
      }
      if (confirmPassword.value !== password.value) {
        showAlertError();
      }else{
        showAlertSuccess()
      }
      if(!acceptTerms.checked){
        showAlertError();
      }else{
        showAlertSuccess()

      }
   
});





