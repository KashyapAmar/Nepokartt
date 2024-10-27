// script.js

// Placeholder function for adding to cart functionality
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// script.js

let carouselSlide = document.querySelector('.carousel-slide');
let images = document.querySelectorAll('.carousel-slide img');
let currentIndex = 0;

// Auto-Swiping Carousel (every 5 seconds)
setInterval(() => {
    moveToNextSlide();
}, 5000); // Changes slide every 5 seconds

// Move to Next Slide
function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselSlide.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Move to Previous Slide
function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselSlide.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Manual Controls
document.querySelector('.right-btn').addEventListener('click', moveToNextSlide);
document.querySelector('.left-btn').addEventListener('click', moveToPrevSlide);



