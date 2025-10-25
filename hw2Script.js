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
      document.getElementById("fnameErrorMsg").innerHTML = "Error: Name must be 1 or more characters";
      errorFlag = 1;
    }
    else {
      if (fnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("fnameErrorMsg").innerHTML = "";
      }
      else {
        document.getElementById("fnameErrorMsg").innerHTML = "Error invalid characters: (Name can only have Letters, apostrophes and dashes)";
        errorFlag = 1;
      }
    }
  }

  function validateMidname() 
  {
    const midnameValid = document.getElementById("midnameValidate").value;
    if(midnameValid < 1 ) {
      document.getElementById("midnameErrorMsg").innerHTML = "";
    }

    else {
      if (midnameValid.match(/^[a-zA-Z]$/)) {
        document.getElementById("midnameErrorMsg").innerHTML = "";
      }
      else {
        document.getElementById("midnameErrorMsg").innerHTML = "Error invalid characters: (Name can only have Letters)";
        errorFlag = 1;
      }
    }
  }

function validateLname() 
  {
    const lnameValid = document.getElementById("lnameValidate").value;
    if(lnameValid < 1) {
      document.getElementById("lnameErrorMsg").innerHTML = "Error: Name must be 1 or more characters";
      errorFlag = 1;
    }
    else {
      if (lnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("lnameErrorMsg").innerHTML = "";
      }
      else {
        document.getElementById("lnameErrorMsg").innerHTML = "Error invalid characters: (Name can only have Letters, apostrophes and dashes)";
        errorFlag = 1;
      }
    }
  }
