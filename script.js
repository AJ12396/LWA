/*Sintaxe para adicionar uma function no JS 
function function_name{ document.getElementById("id-of-element1").style.property = “value” } 
➔ function é uma palavra-chave para definir a função. 
➔ function_name é o nome da função que você definiu em HTML. 
➔ document é o atual documento HTML. 
➔ getElementById significa pegar o elemento pelo id que definimos no código HTML. O nome desse id deve estar entre parênteses. 
➔ style corresponde ao estilo que precisamos dar ao elemento. 
➔ property corresponde à propriedade do elemento (cor, cor de fundo, etc.). 
➔ value representa o valor da propriedade (vermelho, verde, etc.). */
function bodyLoad() {
  document.getElementById("b").style.fontSize="15px";
  document.getElementById("b").style.backgroundColor="darked";
  document.getElementById("b").style.borderRadius="25px";
  document.getElementById("b").style.color="purple";
  document.getElementById("b").style.padding="10px";
  document.getElementById("b").style.borderStyle="solid";
  
  
  document.getElementById("bt").style.fontSize="15px";
  document.getElementById("bt").style.backgroundColor="darked";
  document.getElementById("bt").style.borderRadius="25px";
  document.getElementById("bt").style.color="purple";
  document.getElementById("bt").style.padding="10px";
  document.getElementById("bt").style.borderStyle="solid";
}

function theme() {
  document.getElementById("body").style.backgroundColor="grey";
  document.getElementById("nometitulo").style.color="black";
  document.getElementById("tag_a").style.color="black";
  document.getElementById("tag_a").style.borderColor="black";
  document.getElementById("b").style.backgroundColor="grey";
  document.getElementById("bt").style.backgroundColor="grey";
}

function mleave() {
  document.getElementById("lwa_img").src="https://cdn.akamai.steamstatic.com/steam/apps/1294450/capsule_616x353.jpg?t=1642633529";
}
function mover() {
  document.getElementById("lwa_img").src="https://playreplay.com.br/wp-content/uploads/2018/05/little-witch-academia-chamber-of-time-review-playreplay.jpg";
}

function backTheme() {
  document.getElementById("body").style.backgroundColor="#e6e6fa";
  document.getElementById("nometitulo").style.color="purple";
  document.getElementById("tag_a").style.color="purple";
  document.getElementById("tag_a").style.borderColor="purple";
  document.getElementById("b").style.backgroundColor="#e6e6fa";
  document.getElementById("bt").style.backgroundColor="#e6e6fa";
}