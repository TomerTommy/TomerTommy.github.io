
// Open slideshow
function openModal() 
{
    document.getElementById("myModal").style.display = "block";
    document.getElementById("nav").style.display = "none";
}
 
// Close slideshow
function closeModal() 
{
    document.getElementById("myModal").style.display = "none";
    document.getElementById("nav").style.display = "block";
}
  
var slideIndex = 1;
showSlides(slideIndex);

// Recording slide index
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}
  
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}
  
function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}