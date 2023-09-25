// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Birthday picture gallery
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Read more button

// function readMoreButton() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }

function readMoreButton() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btn = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    // Button is in the "Read more" state
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    btn.classList.remove("clicked"); // Remove the "clicked" class
    // Add your CSS styles for "Read more" state (white background, grey border)
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.style.border = "2px solid #555555";
    moreText.style.display = "none";
  } else {
    // Button is in the "Read less" state
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    btn.classList.add("clicked"); // Add the "clicked" class
    // Add your CSS styles for "Read less" state (grey colored background)
    btn.style.backgroundColor = "#555555";
    btn.style.color = "white";
    btn.style.border = "none";
    moreText.style.display = "inline";
  }
}


