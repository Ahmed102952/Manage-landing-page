const testimonials = document.querySelectorAll('.testimonial');
const testimonialsFather = document.querySelector('.testimonials');
const sliderCircles = document.querySelectorAll('.small-circle');
const HamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

sliderCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        let i = circle.getAttribute('data-scroll');
        testimonials[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center'}) 
    })
})
testimonialsFather.addEventListener('scroll', () => {
    testimonials.forEach((element, i) => {
        if(testimonials[i].getBoundingClientRect().x > 0 && testimonials[i].getBoundingClientRect().x < testimonials[i].clientWidth) {
            sliderCircles.forEach(e => {
                e.classList.remove('active-circle');
            })
            sliderCircles[i].classList.add('active-circle');
        }
    })
});

HamburgerIcon.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        HamburgerIcon.classList.remove('open');
        overlay.classList.remove('open');
        document.querySelector('body').style.overflowY = 'scroll'
        return
    }
    mobileMenu.classList.add('open');
    HamburgerIcon.classList.add('open');
    overlay.classList.add('open');
    document.querySelector('body').style.overflowY = 'hidden'
});