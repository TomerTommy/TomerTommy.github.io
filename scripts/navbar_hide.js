
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;

window.onscroll = function() 
{
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) 
  {
    document.getElementById("nav").style.top = "0";
  }
  else 
  {
    document.getElementById("nav").style.top = "-150px";
  }

  prevScrollpos = currentScrollPos;
}

/* open and close curtain navbar menu on mobile */

function openNav() {

  document.getElementById("curtain_nav").style.height = "100vh";
}

function closeNav() {

  document.getElementById("curtain_nav").style.height = "0%";
}