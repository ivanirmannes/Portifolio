document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 1. MENU MOBILE
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

        if (menuToggle && nav) {

            menuToggle.addEventListener('click', function () {

        const menuAberto = nav.classList.toggle('active');

        menuToggle.classList.toggle('active');

        menuToggle.setAttribute(
            'aria-expanded',
            menuAberto
        );

        menuToggle.setAttribute(
            'aria-label',
            menuAberto ? 'Fechar menu' : 'Abrir menu'
        );

    });

}

    const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        nav.classList.remove('active');
        menuToggle.classList.remove('active');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        menuToggle.setAttribute(
            'aria-label',
            'Abrir menu'
        );

    });

});


    // ========================================
    // 2. ANIMAÇÃO SUAVE AO ENTRAR NAS SEÇÕES
    // ========================================

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {

        observer.observe(section);

    });


    // ========================================
    // 3. ANO AUTOMÁTICO DO FOOTER
    // ========================================

    const footerText = document.querySelector('.footer p');

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.textContent =
            `© ${currentYear} Ivanir Mannes. Todos os direitos reservados.`;

    }

});