// Adding in script to bring in current date. Found on W3schools.com
document.addEventListener('DOMContentLoaded', (event) => {
  function getDate() {
    const dateChange = new Date();
	  let currentDay = dateChange.toLocaleDateString();
	  document.getElementById ("currentDate").innerHTML = currentDay; 
  }
  getDate();
})

/*<!--Adding script to bring footer into form. Script found at 
https://stackoverflow.com/questions/63663201/i-use-a-fetch-statement-to-retrieve-my-html-footer-and-include-it-on-every-page*/
function getFooter() {
  fetch('hw2-footer.html') //Fetching the footer
    .then(response => response.text())
    .then(data => {
      const footer = document.getElementById('footerPlaceholder');
      if (footerPlacholder) {
      footerPlaceholder.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading footer:', error));
}
