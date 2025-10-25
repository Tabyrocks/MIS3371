// Adding in script to bring in current date. Found on W3schools.com
document.addEventListener('DOMContentLoaded', (event) => {
  function getDate() {
    const dateChange = new Date();
	  let currentDay = dateChange.toLocaleDateString();
	  document.getElementById ("currentDate").innerHTML = currentDay; 
  }
  getDate();
  getFooter();
})

/*<!--Adding script to bring footer into form. Script found at 
https://stackoverflow.com/questions/63663201/i-use-a-fetch-statement-to-retrieve-my-html-footer-and-include-it-on-every-page*/
function getFooter() {
  fetch('hw2-footer.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('footerPlaceholder').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
}


function validateFname() 
  {
    const fnameValid = document.getElementById("fnameValidate").value;
    if(fnameValid < 1) {
      document.getElementById("fnameErrorMsg").innerHTML = "Error: First name must be 1 or more characters";
      fnameErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (fnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("fnameErrorMsg").innerHTML = "";
        fnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("fnameErrorMsg").innerHTML = "Error invalid first name: (Name can only have Letters, apostrophes and dashes)";
        fnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateMidname() 
  {
    const midnameValid = document.getElementById("midnameValidate").value;
    if(midnameValid < 1 ) {
      document.getElementById("midnameErrorMsg").innerHTML = "";
      midnameErrorMsg.style.display = "none";
    }

    else {
      if (midnameValid.match(/^[a-zA-Z]$/)) {
        document.getElementById("midnameErrorMsg").innerHTML = "";
        midnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("midnameErrorMsg").innerHTML = "Error invalid middle initial: (Name can only have Letters)";
        midnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

function validateLname() 
  {
    const lnameValid = document.getElementById("lnameValidate").value;
    if(lnameValid < 1) {
      document.getElementById("lnameErrorMsg").innerHTML = "Error: Last name must be 1 or more characters";
      lnameErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (lnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("lnameErrorMsg").innerHTML = "";
        lnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("lnameErrorMsg").innerHTML = "Error invalid last name: (Name can only have Letters, apostrophes and dashes)";
        lnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateDob() 
  {
    //pulls the current date from the function getDate()
    const currentDate = getElementById("currentDate").Date;
    //bringing in the date the user enters
    const userDate = getElementById("dobValidate").Date;
    //Assigning th minimum date to be 120 years prior to currentDate
    const minDate = getElementById("currentDate").Date;
    minDate.setFullYear(minDate.getFullYear() - 120);

    if (userDate > currentDate) {
        document.getElementById("dateErrorMsg").innerHTML = "Error invalid Date: (Date cannot be in the future)";
        dateErrorMsg.style.display = "block";
        console.error("Error invalid Date: (Date cannot be in the future)")
        errorFlag = 1;
    }

    else if (userDate <= minDate) {
        document.getElementById("dateErrorMsg").innerHTML = "Error invalid Date: (Date must be within 120 years from today)";
        dateErrorMsg.style.display = "block";
        console.error("Error invalid Date: (Date must be within 120 years from today)")
        errorFlag = 1;
    }

    else () => {
        document.getElementById("dateErrorMsg").innerHTML = "";
        dateErrorMsg.style.display = "none";
    }
    
  }

  function validatePhone() 
  {
    const phoneValid = document.getElementById("phoneValidate").value;
    if(phoneValid < 10) {
      document.getElementById("phoneErrorMsg").innerHTML = "Error: Phone number must be 10 to 12 characters";
      phoneErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (phoneValid.match(/[0-9]{3,3}?[-]?[0-9]{3,3}?[-]?[0-9]{4,4}$/)) {
        document.getElementById("phoneErrorMsg").innerHTML = "";
        phoneErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("phoneErrorMsg").innerHTML = "Phone Error: (Invalid or missing characters. Must be in 555-555-2222 or 5555552222 format)";
        phoneErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateEmail() 
  {
    const emailValid = document.getElementById("emailValidate").value;
    if(emailValid < 5) {
      document.getElementById("emailErrorMsg").innerHTML = "Error: email address must be 5 or more characters";
      emailErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (emailValid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("emailErrorMsg").innerHTML = "";
        emailErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("emailErrorMsg").innerHTML = "Email Error: (Invalid or missing characters. Must be in email@domain.com format)";
        emailErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateEcFname() 
  {
    const ecFnameValid = document.getElementById("ecFnameValidate").value;
    if(ecFnameValid < 1) {
      document.getElementById("ecFnameErrorMsg").innerHTML = "";
      ecFnameErrorMsg.style.display = "none";
    }
    else {
      if (ecFnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("ecFnameErrorMsg").innerHTML = "";
        ecFnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecFnameErrorMsg").innerHTML = "Error invalid first name: (Name can only have Letters, apostrophes and dashes)";
        ecFnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }


  function validateEcLname() 
  {
    const ecLnameValid = document.getElementById("ecLnameValidate").value;
    if(ecLnameValid < 1) {
      document.getElementById("ecLnameErrorMsg").innerHTML = "";
      ecLnameErrorMsg.style.display = "none";
    }
    else {
      if (ecLnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("ecLnameErrorMsg").innerHTML = "";
        ecLnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecLnameErrorMsg").innerHTML = "Error invalid last name: (Name can only have Letters, apostrophes and dashes)";
        ecLnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateEcPhone() 
  {
    const ecPhoneValid = document.getElementById("ecPhoneValidate").value;
    if(ecPhoneValid < 1) {
      document.getElementById("ecPhoneErrorMsg").innerHTML = "";
      ecPhoneErrorMsg.style.display = "none";
    }
    else {
      if (ecPhoneValid.match(/[0-9]{3,3}?[-]?[0-9]{3,3}?[-]?[0-9]{4,4}$/)) {
        document.getElementById("ecPhoneErrorMsg").innerHTML = "";
        ecPhoneErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecPhoneErrorMsg").innerHTML = "Phone Error: (Invalid or missing characters. Must be in 555-555-2222 or 5555552222 format)";
        ecPhoneErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

  function validateEcEmail() 
  {
    const ecEmailValid = document.getElementById("ecEmailValidate").value;
    if(ecEmailValid < 1) {
      document.getElementById("ecEmailErrorMsg").innerHTML = "";
      ecEmailErrorMsg.style.display = "none";
    }
    else {
      if (ecEmailValid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("ecEmailErrorMsg").innerHTML = "";
        ecEmailErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecEmailErrorMsg").innerHTML = "Email Error: (Invalid or missing characters. Must be in email@domain.com format)";
        ecEmailErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }
/*
  function reviewEntry() {
    const reviewContainer = document.getElementById("infoReview");
    const reviewTable = document.createElement("table");
    const reviewTableHeader = document.createElement("thead");
    const reviewTableBody = document.createElement("tbody")

    //Creating header row and the cells
    const reviewHeaderRow = document.createElement("tr");
    const reviewColumns = ["C1", "C2", "C3"];
      reviewColumns.forEach()


  }

  */