window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

var calculate = document.getElementById("calcular");
var resultado = document.getElementById("resultado");

function calcularPercentual() {
  var materia = parseInt(document.getElementById("materia").value);
  var fullValue = parseFloat(document.getElementById("carga-horaria").value);
  var Value = parseFloat(document.getElementById("faltas").value);
  var totalPercentual = 100; 

  var percentual = (totalPercentual * Value) / fullValue;
  var faltas = totalPercentual - percentual;

  resultado.innerHTML = "O seu número de faltas corresponde há " + percentual.toFixed(2) + `% da carga horária total de ${materia}.`;
  faltasDisponiveis.innerHTML = "O aluno ainda tem " + faltas.toFixed(1) + `% de faltas disponíveis em ${materia}.`;
  situacao.innerHTML = "O aluno é considerado reprovado por faltas quando ultrapasar 25% de faltas na carga horária da disciplina.";
}
calculate.addEventListener('click', calcularPercentual);