//Mudando no button "Verificar";

let button_verificar = document.querySelector('#demo');

let button_adicionar = document.querySelector('#adicionar');

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

let caracteristicas = document.querySelectorAll('.carac_name');



//Config buttton adicionar

listaGeral = []
//Função para jogar os dados dentro da lista
function caracValue(){

  //Lista para inserir os arquivos em forma de lista dentro da lista geral
  listaCarac = []

  //Adicionando o nome na primeira posição dentro da lista
  listaCarac.push(nome.value.toUpperCase())
  for(i=0;i < 5; i++){
    
    listaCarac.push(caracteristicas[i].value.toUpperCase())
    caracteristicas[i].value = ""
    
  }
  
  listaGeral.push(listaCarac)

  //Zerando o input nome
  nome.value = ""
  console.log(listaGeral)
}


button_adicionar.addEventListener('click', caracValue);




//Config buttton verificar
const ListaCaracPessoaBoba = ['FELIZ', 'SORRIDENTE', 'ALEGRE',
 'ENGRAÇADO','PIADISTA', 'BOBO',
  'BOBAO', 'SACANEADO', 'IDIOTA', 
  'TRAPALHAO', 'BURRO', 'TAPADO',
   'SINICO']

   test = 'JONATHAN'

   function buttonVericar(){

   for(i=0; i < 6; i++){

//    console.log(`${ListaCaracPessoaBoba[i]},  ${i}`)
    
 
    ListaCaracPessoaBoba.forEach(element => {
      listaGeral.forEach(geral=>{
        
        if (element === geral[i]){
       console.log('tem')}else{
        console.log('nao tem')
       }
        
      });
      
      
    });
  
  }
   }
  button_verificar.addEventListener('click', buttonVericar);