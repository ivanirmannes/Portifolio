// Aguarda o HTML estar pronto antes de procurar os elementos da página.
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav');

  // Encerra o menu e mantém o estado acessível do botão sincronizado.
  const closeMenu = () => {
    if (!menuToggle || !navigation) return;

    navigation.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  if (menuToggle && navigation) {
    // Alterna a navegação móvel e atualiza o estado anunciado por leitores de tela.
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('active');

      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha o menu depois que a pessoa escolhe um destino da navegação.
    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Permite fechar a navegação móvel pelo teclado com a tecla Escape.
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // Mantém o ano do rodapé atualizado sem depender de uma edição anual.
  const currentYear = document.querySelector('#current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
});
