// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. FUNKCIONALNOST ZA MOBILNI MENI --- */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        iconOpen.classList.toggle('hidden');
        iconOpen.classList.toggle('block');
        iconClose.classList.toggle('hidden');
        iconClose.classList.toggle('block');
    }

    // Otvori/Zatvori klikom na hamburger dugme
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Automatski zatvori meni kada korisnik klikne na neki od linkova
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            iconOpen.classList.remove('hidden');
            iconOpen.classList.add('block');
            iconClose.classList.add('hidden');
            iconClose.classList.remove('block');
        });
    });


    /* --- 2. FUNKCIONALNOST ZA FAQ (ČESTA PITANJA) --- */
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = !content.classList.contains('hidden');

            // Prvo zatvori sva ostala FAQ pitanja (Akordion efekat - otvara se samo jedno po jedno)
            faqButtons.forEach(otherBtn => {
                otherBtn.nextElementSibling.classList.add('hidden');
                otherBtn.querySelector('.faq-icon').classList.remove('rotate-180', 'text-pirot-red');
            });

            // Ako ovo pitanje nije bilo otvoreno, sada ga otvori
            if (!isOpen) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180', 'text-pirot-red');
            }
        });
    });
});