// script.js — controla a alternância do menu em telas pequenas
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-menu]'); // botão do menu
  const list = document.querySelector('.menu');      // lista de links do menu
  if(btn && list){
    btn.addEventListener('click', () => {
      list.classList.toggle('open'); // abre ou fecha o menu
    });
  }
});
