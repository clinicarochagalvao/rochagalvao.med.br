/* Clínica Rocha Galvão — comportamento do site
   1. Menu no celular (abrir/fechar)
   2. Destaque do item do menu conforme a seção visível
   3. Ano atual no rodapé
   Tudo opcional: o site funciona sem JavaScript. */
(function () {
  "use strict";

  var botao = document.querySelector(".menu-botao");
  var nav = document.getElementById("menu");

  // 1. Menu no celular ------------------------------------------------------
  if (botao && nav) {
    var fechar = function () {
      nav.classList.remove("is-open");
      botao.setAttribute("aria-expanded", "false");
      botao.setAttribute("aria-label", "Abrir menu");
    };
    var abrir = function () {
      nav.classList.add("is-open");
      botao.setAttribute("aria-expanded", "true");
      botao.setAttribute("aria-label", "Fechar menu");
    };

    botao.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) { fechar(); } else { abrir(); }
    });

    // Fecha ao escolher um destino
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { fechar(); }
    });

    // Fecha com Esc e devolve o foco ao botão
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        fechar();
        botao.focus();
      }
    });

    // Fecha se a janela crescer para o layout de tela larga
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (mq) {
      if (mq.matches) { fechar(); }
    });
  }

  // 2. Item do menu ativo ---------------------------------------------------
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  if (links.length && "IntersectionObserver" in window) {
    var porId = {};
    links.forEach(function (a) {
      var id = a.getAttribute("href").replace("#", "");
      var alvo = document.getElementById(id);
      if (alvo) { porId[id] = a; }
    });

    var marcar = function (id) {
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      if (porId[id]) { porId[id].setAttribute("aria-current", "true"); }
    };

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) { marcar(entrada.target.id); }
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

    Object.keys(porId).forEach(function (id) {
      observador.observe(document.getElementById(id));
    });
  }

  // 3. Ano no rodapé --------------------------------------------------------
  var ano = document.getElementById("ano");
  if (ano) { ano.textContent = String(new Date().getFullYear()); }
})();
