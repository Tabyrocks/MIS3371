function removedata1() {
  document.getElementById("").innerHTML = "";
}

// Adding in script to bring in current date. Found on W3schools.com
function getDate() {
  const d = new Date();
	let currentDay = d.toLocaleDateString();
	document.getElementById ("today").innerHTML = currentDay; 
}
