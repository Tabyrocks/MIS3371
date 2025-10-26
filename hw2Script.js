// Adding in script to bring in current date. Found on W3schools.com
document.addEventListener('DOMContentLoaded', (event) => {
  setDate();
  getFooter();
})
  
function getDate() {
  const dateChange = new Date();
  let currentDay = dateChange.toLocaleDateString();
  return currentDay;
}

function setDate() {
  document.getElementById ("currentDate").innerHTML = getDate(); 
}

/*<!--Adding script to bring footer into form. Script found at 
https://stackoverflow.com/questions/63663201/i-use-a-fetch-statement-to-retrieve-my-html-footer-and-include-it-on-every-page*/
function getFooter() 
  {
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
  
function validateSsn() 
  {
    const ssnValid = document.getElementById("ssnValidate").value;
    if(ssnValid < 9) {
      document.getElementById("ssnErrorMsg").innerHTML = "Error: SSN must be 9 to 11 characters";
      ssnErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (ssnValid.match(/[0-9]{3,3}?[-]?[0-9]{2,2}?[-]?[0-9]{4,4}$/)) {
        document.getElementById("ssnErrorMsg").innerHTML = "";
        ssnErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ssnErrorMsg").innerHTML = "SSN Error: (Invalid or missing characters. Must be in 555-55-2222 or 555552222 format)";
        ssnErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }


function validateDob() 
  {
    //pulls the current date from the function getDate()
    const currentDate = new Date(getDate());
    //bringing in the date the user enters
    const userDate = new Date(document.getElementById("dobValidate").value);
    //Assigning th minimum date to be 120 years prior to currentDate
    const minDate = new Date(getDate());
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

    else {
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

function validateAddress() 
  {
    const addressValid = document.getElementById("addressValidate").value;
    if(addressValid < 2) {
      document.getElementById("addressErrorMsg").innerHTML = "Error: address must be 2 or more characters";
      addressErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (addressValid.match(/^[a-zA-Z0-9#\s,.\'-]{2,}$/)) {
        document.getElementById("addressErrorMsg").innerHTML = "";
        addressErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("addressErrorMsg").innerHTML = "Address Error: (Invalid characters, the only special characters can be a comma, period, apostrophe, hyphen or a hashtag)";
        addressErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

function validateAddress2() 
  {
    const address2Valid = document.getElementById("address2Validate").value;
    if(address2Valid < 1) {
      document.getElementById("address2ErrorMsg").innerHTML = "";
      address2ErrorMsg.style.display = "none";
    }
    else {
      if (address2Valid.match(/^[a-zA-Z0-9#\s,.\'-]{2,}$/)) {
        document.getElementById("address2ErrorMsg").innerHTML = "";
        address2ErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("address2ErrorMsg").innerHTML = "Address 2 Error: (Invalid characters, the only special characters can be a comma, period, apostrophe, hyphen or a hashtag)";
        address2ErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

function validateCity() 
  {
    const cityValid = document.getElementById("cityValidate").value;
    if(cityValid < 2) {
      document.getElementById("cityErrorMsg").innerHTML = "Error: City must be 2 or more characters";
      cityErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (cityValid.match(/^[a-zA-Z0-9`\s'-]{2,}$/)) {
        document.getElementById("cityErrorMsg").innerHTML = "";
        cityErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("cityErrorMsg").innerHTML = "City Error: (Invalid characters, the only special characters can be a hyphen or accent";
        cityErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

function validateZip() 
  {
    const zipValid = document.getElementById("zipValidate").value;
    if(zipValid < 5) {
      document.getElementById("zipErrorMsg").innerHTML = "Error: Zip Code at least 5 characters";
      zipErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (zipValid.match(/^\d{5}(?:[-]\d{4})?$/)) {
        document.getElementById("zipErrorMsg").innerHTML = "";
        zipErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("zipErrorMsg").innerHTML = "Zip Code Error: (Invalid characters, the only special character can be a hyphen and no spaces allowed";
        zipErrorMsg.style.display = "block";
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

function validateUserId() 
  {
    const userIdValid = document.getElementById("userIdValidate").value;
    if(userIdValid < 5) {
      document.getElementById("userIdErrorMsg").innerHTML = "Error: Username is required and must be 5 or more characters. It cannot begin with a number";
      userIdErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (userIdValid.match(/^[a-zA-Z][a-zA-Z0-9_-]{5,}$/)) {
        document.getElementById("userIdErrorMsg").innerHTML = "";
        userIdErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("userIdErrorMsg").innerHTML = "Username Error: (Invalid characters- only letters, numbers, underscore or dashes allowed. No spaces.";
        userIdErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
  }

function convertUserId() 
  {
    let userId = document.getElementById("userIdValidate");
    let convertUserLc = userId.toLowerCase();
    document.getElementById("infoReview").innerHTML = convertUserLc;
  }

/*
function reviewEntry() 
  {
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