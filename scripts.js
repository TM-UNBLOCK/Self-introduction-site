// JavaScriptによるページ遷移時のエフェクトなど
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav ul li a').forEach(a => {
                a.style.color = "white";
                if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.style.color = "#ff6347";
                }
            });
        }
    });
});
