window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav ul li a').forEach(a => {
                a.classList.remove('active');
                if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            });
        }
    });
});
