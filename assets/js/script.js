document.addEventListener('DOMContentLoaded', function () {

  // --- Menu mobile ---
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('aberta');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('aberta'); });
    });
  }

  // --- Scroll reveal ---
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); o.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visivel'); });
  }

  // --- Destaque do item de menu ativo ---
  var secoes = document.querySelectorAll('section[id]');
  var links  = document.querySelectorAll('.nav-lista a');
  var obsMenu = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (l) {
          l.classList.toggle('ativo', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  secoes.forEach(function (s) { obsMenu.observe(s); });

  // --- Form (protótipo) ---
  var form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada! (protótipo — backend a configurar em produção)');
    });
  }

});
