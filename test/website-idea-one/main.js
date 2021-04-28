

//Navigation scroll

window.onscroll = function() {navScroll()};
//getting navbar
var navbar = document.getElementByClassName("navbar-nav");
//Offset position
var sticky = navbar.offsetTop;
//
function navScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
