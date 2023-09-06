const inputText = document.getElementById("inputText");
const inputPassword = document.getElementById("inputPassword");
const inputNumber = document.getElementById("inputNumber");
const inputEmail = document.getElementById("inputEmail");
const checkBoxId = document.getElementById("checkBoxId");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const checkBoxError = document.getElementById("checkBoxError");

// var errorName = "";
// var errorAge = "";
// var errorEmail = "";
// var errorPassword = "";
// var errorCheckBox = "";

buttonSubmit.addEventListener("click", (event) => {
	event.preventDefault();

	var errorName = "";
	var errorAge = "";
	var errorEmail = "";
	var errorPassword = "";
	var errorCheckBox = "";

	// errorName = "";
	// errorAge = "";
	// errorEmail = "";
	// errorPassword = "";
	// errorCheckBox = "";

	const text = inputText.value;
	if (text == "") {
		errorName = "Name must be inputted ! <br>";
		// console.log("tes");
	}

	const password = inputPassword.value;
	if (password.length < 8) {
		errorPassword = "Password must be 8 character ! <br>";
		// console.log("hehe");
	}

	const email = inputEmail.value;
	if (!email.includes("@gmail.com")) {
		errorEmail = "Email must include '@gmail.com' ! <br>";
	}

	const number = inputNumber.value;
	if (number < 12) {
		errorAge = "You must at least 12 years old ! <br>";
	}

	const checkBox = checkBoxId.checked;
	if (!checkBox) {
		errorCheckBox = "Please check Term of Service & Privacy Policy ! <br>";
	}

	nameError.innerHTML = errorName;
	passwordError.innerHTML = errorPassword;
	emailError.innerHTML = errorEmail;
	ageError.innerHTML = errorAge;
	checkBoxError.innerHTML = errorCheckBox;

	if (
		errorName.length == 0 &&
		errorAge.length == 0 &&
		errorEmail.length == 0 &&
		errorCheckBox.length == 0 &&
		errorPassword.length == 0
	) {
		window.alert("You already registered!");
		// console.log("done");
	} else {
		// console.log("blom");
	}
});
