nome = document.querySelector('#demo');

function mudar(){
nome.textContent="Vai dar Filipe🤣";
  }
function voltar(){
nome.textContent="Verificar 👀";
  }

nome.addEventListener('mouseover', mudar);
nome.addEventListener('mouseout',voltar);