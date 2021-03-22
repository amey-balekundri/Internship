// Get the container element
var sidenav = document.getElementById("sidenav");

// Get all buttons with class="btn" inside the container
var page = sidenav.getElementsByClassName("page");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < page.length; i++) {
  page[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}