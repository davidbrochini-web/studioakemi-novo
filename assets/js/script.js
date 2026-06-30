// Studio Akemi — script.js
// Protótipo — funcionalidades básicas de interface

document.addEventListener('DOMContentLoaded', function () {
  var botaoMenu = document.querySelector('.menu-toggle');
  var listaMenu = document.querySelector('.menu-lista');

  if (botaoMenu && listaMenu) {
    botaoMenu.addEventListener('click', function () {
      listaMenu.classList.toggle('aberto');
    });

    // fecha o menu ao clicar em um link (mobile)
    listaMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        listaMenu.classList.remove('aberto');
      });
    });
  }

  // Formulário de contato — protótipo sem backend ainda
  var formulario = document.querySelector('.form-contato');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Protótipo: formulário ainda não está conectado a um backend. Em produção, isso enviará um e-mail ou abrirá o WhatsApp automaticamente.');
    });
  }
});
