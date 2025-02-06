
var slideIndex = 1;
showDivs(slideIndex);

/**
 * Changes the current slide by the specified increment.
 * 
 * @param {6} n - The number of slides to move forward or backward.
 */

/**
 * Changes the current slide by the specified increment.
 *
 * @param {6} n - The number of slides to move forward or backward.
 */
function plusDivs(n) {
  showDivs(slideIndex += n);
}



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}
