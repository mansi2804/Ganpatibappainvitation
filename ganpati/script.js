document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
            element.classList.add('visible');
        }
    });
});
