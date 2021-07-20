// VARIABLES
const slides_Elements = document.querySelectorAll('.slide');
const prev_Element = document.querySelector('#prev');
const next_Element = document.querySelector('#next');
const auto = true;
const intervalTime = 5000;
let slideInterval;


// FUNCTIONS
const nextSlide = function () {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slideInteval
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  }
  else {
    // Add current to start
    slides_Elements[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = function () {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add('current');
  }
  else {
    // Add current to last
    slides_Elements[slides_Elements.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}


// BUTTON EVENTS
next_Element.addEventListener('click', e => {
  nextSlide();

  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev_Element.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});


// AUTO SLIDE
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}



