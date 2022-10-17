//Mudando no button "Verificar";

const button_verificar = document.querySelector('#demo');

function mudar(){
button_verificar.textContent="Vai dar Filipe🤣";
  }
function voltar(){
button_verificar.textContent="Verificar 👀";
  }

button_verificar.addEventListener('mouseover', mudar);
button_verificar.addEventListener('mouseout',voltar);


//Pegando os inputs;

let nome = document.querySelector('#User_name');

console.log(nome)

let caracteristicas = document.querySelectorAll('.carac_name');

console.log(caracteristicas)