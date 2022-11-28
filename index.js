function getPasswordInputs() {
    return {
        "password": document.getElementById("password"),
        "confirm-password": document.getElementById("confirm-password")
    };
}



function handlePasswordChange(e) {
    const password_inputs = getPasswordInputs();

    
    if (password_inputs.password.value === password_inputs["confirm-password"].value) {
        password_inputs.password.setCustomValidity("");
        for (const input of Object.values(password_inputs)) {
            input.setAttribute("isvalid", "true")
        };
    } else {

        password_inputs.password.setCustomValidity("Passwords do not match.");
        for (const input of Object.values(password_inputs)) {
            input.setAttribute("isvalid", "false")
        }
        
    }
}

function addPasswordValidation() {
    const password_inputs = getPasswordInputs();
    
    for (const input of Object.values(password_inputs)) {
        input.addEventListener('change', handlePasswordChange);
    };
}

addPasswordValidation();