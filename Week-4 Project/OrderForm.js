// popup
var modal = document.getElementById("myModal");

// button opening popup
var btn = document.getElementById("myBtn");

// <span> closing popup
var span = document.getElementsByClassName("close")[0];

// button clicks button, popup opens
btn.onclick = function() {
  modal.style.display = "block";
}

// clicks on <span> (x), close popup
span.onclick = function() {
  modal.style.display = "none";
}

// click outside of popup, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// slides JS
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}