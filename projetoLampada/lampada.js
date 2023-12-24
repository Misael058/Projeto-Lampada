const botaoLigar = document.getElementById("botaoLigar");
const botaoDesligar= document.getElementById("botaoDesligar");
let lampada = document.getElementById("img_lampada");
let botaoQuebrar = document.getElementById("botaoQuebrar");



function ligoou (){
  lampada.src = "./img/ligada.jpg";
}
function desligoou () {
    lampada.src = "./img/desligada.jpg";
}

function Quebrar () {
  lampada.src= "./img/quebrada.jpg";

}


botaoLigar.addEventListener("click", ligoou );
botaoDesligar.addEventListener("click",desligoou);
botaoQuebrar.addEventListener("click",Quebrar);