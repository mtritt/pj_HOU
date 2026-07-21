
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slides.length;


function updateSlides(index) {

    slides.forEach(slide => {
        slide.classList.remove('active');
    });


    dots.forEach(dot => {
        dot.classList.remove('active');
    });


    if (slides[index]) {
        slides[index].classList.add('active');
    }
    

    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlides(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlides(currentIndex);
});

function currentSlide(index) {
    if (index >= 0 && index < totalSlides) {
        currentIndex = index;
        updateSlides(currentIndex);
    }
}

setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlides(currentIndex);
}, 5000);

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}