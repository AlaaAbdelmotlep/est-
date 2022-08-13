// Get the modal
var modal = document.getElementById("loginForm");

// Get the button that opens the modal
var btn = document.getElementsByClassName("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        modal.style.display = "block";
      }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}










