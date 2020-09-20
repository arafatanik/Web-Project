
        //----------Admin Email validation --------------

function mailvalidate()
{
    var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
    var useremail=document.getElementById("adminloginemail").value;

    if(emailexp.test(useremail))
    {
        document.getElementById("inv-mail").style.display="none";
    }
    else{
        document.getElementById("inv-mail").style.display="inline";
    }
}


          //--------Admin pass validation  ----------

const input = document.querySelector('#adminloginpass');
const error = document.querySelector('.TextError');
const timeout = null;

const showError = message => {
    error.style.color = '#C91E1E';
    error.style.display = 'block';
    error.innerHTML = message;
}

const showPass = message => {
    error.style.color = '#119822';
    error.innerHTML = message;
}

const validatePassword = password =>
{
    const lowerCaseRagex = new RegExp('^(?=.*[a-z])');
    const upperCaseRagex = new RegExp('^(?=.*[a-z])');
    const specialCharacterRagex = new RegExp('^(?=.*[!@#$%^&*])');
    const numericRagex = new RegExp('^(?=.*[0-9])');

    if (!password == 0) {
        if (password.length < 6) {
            showError('Your password must be at least 6 characters long.');
        } else if (!lowerCaseRagex.test(password)) {
            showError('Your password must include at least one lowercase character.')
        } else if (!upperCaseRagex.test(password)) {
            showError('Your password must include at least one uppercase character.')
        } else if(!specialCharacterRagex.test(password)) {
            showError('Your password must include at least one spacial character.')
        } else if (!numericRagex.test(password)) {
            showError('Your password must include at least one number.')
        } else {
            showPass('Strong Password!')
        }
    } else {
        showError('');
        showPass('');
    }


}

input.addEventListener('keyup', e =>
{
    const password = e.target.value;
    validatePassword(password);
});
