// Studio Akemi — script.js
// Protótipo — interações de interface (menu, scroll reveal, formulário)

document.addEventListener('DOMContentLoaded', function () {

  // ===== Menu mobile =====
  var botaoMenu = document.querySelector('.menu-toggle');
  var listaMenu = document.querySelector('.menu-lista');

  if (botaoMenu && listaMenu) {
    botaoMenu.addEventListener('click', function () {
      listaMenu.classList.toggle('aberto');
    });

    listaMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        listaMenu.classList.remove('aberto');
      });
    });
  }

  // ===== Destaca o link do menu correspondente à seção visível =====
  var secoes = document.querySelectorAll('section[id]');
  var linksMenu = document.querySelectorAll('.menu-lista a');

  var observerMenu = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        var id = entrada.target.getAttribute('id');
        linksMenu.forEach(function (link) {
          link.classList.toggle('ativo', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  secoes.forEach(function (secao) {
    observerMenu.observe(secao);
  });

  // ===== Scroll reveal: anima elementos .reveal ao entrarem na tela =====
  var elementosReveal = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observerReveal = new IntersectionObserver(function (entradas, observer) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    elementosReveal.forEach(function (el) {
      observerReveal.observe(el);
    });
  } else {
    // navegador antigo sem suporte: mostra tudo direto
    elementosReveal.forEach(function (el) {
      el.classList.add('visivel');
    });
  }

  // ===== Formulário de contato — protótipo sem backend ainda =====
  var formulario = document.querySelector('.form-contato');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Protótipo: formulário ainda não está conectado a um backend. Em produção, isso enviará um e-mail ou abrirá o WhatsApp automaticamente.');
    });
  }

});
