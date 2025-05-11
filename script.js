function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function contactNow() {
    window.open('https://instagram.com/aff_ordableprice', '_blank');
}
