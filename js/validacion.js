function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
};

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
};

  
  function validateForm() {
    const myName = document.getElementById('nombre').value;
    const surName = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password1').value;
    const confirmPassword = document.getElementById('password2').value;
    const acceptTerms = document.getElementById('terminos').checked;

    if (myName === '' || surName === '' || email === '' || password === '' || confirmPassword === '' || !acceptTerms) {
      showAlertError();
      return;
    }

    if (password.length < 6 && confirmPassword !== password) {
      showAlertError();
      return;
    }else{

        showAlertSuccess();
      }
        }
  // Asigna la función de validación al botón de registro
  const regBtn = document.getElementById('regBtn');
  regBtn.addEventListener('click', validateForm);
