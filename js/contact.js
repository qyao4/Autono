function submitForm(e){
    hideErrors();
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}
    alert("Your feedback has been submitted.");
	return true;
}

function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear order?')) {
		hideErrors();
        document.getElementById("fullname").focus();
		return true;
	}
	// Prevents the form from resetting
	e.preventDefault();
	return false;
}

function formHasErrors(){
    let errorFlag = false;

    // Validate required fields
    let requires = ["fullname","phonenumber","email"]
    for(let i = 0;i < requires.length;i++){
        let fullname = document.getElementById(requires[i]);
        if(!hasInput(fullname)){
            if(!errorFlag){
                fullname.focus();
                fullname.select();
            }
            errorFlag = true;
            document.getElementById(requires[i]+"_error").style.display = "block";
        }
    }

    // Validate phone number
    let phonenumber = document.getElementById("phonenumber");
    let regex = new RegExp(/^\d{10}$/);
    if(hasInput(phonenumber) && !regex.test(phonenumber.value)){
        if(!errorFlag){
            phonenumber.focus();
            phonenumber.select();
        }
        errorFlag = true;
        document.getElementById("phonenumberformat_error").style.display = "block";
    }

    // Validate email
    let email = document.getElementById("email");
    regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(hasInput(email) && !regex.test(email.value)){
        if(!errorFlag){
            email.focus();
            email.select();
        }
        document.getElementById("emailformat_error").style.display = 'block';
        errorFlag = true;
    }
    return errorFlag;
}

function hasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("contactinfo_error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

function load(){
    // Reset the form using the default browser reset
	// This is done to ensure the radio buttons are unchecked when the page is refreshed
	// This line of code must be done before attaching the event listener for the customer reset
	document.getElementById("contactForm").reset();

    // Add event listener
    document.getElementById("contactForm").addEventListener("reset", resetForm);
    document.getElementById("contactForm").addEventListener("submit",submitForm);
}

document.addEventListener("DOMContentLoaded",load);