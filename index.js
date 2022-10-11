var suma = require('./src/app/app');

var button = document.getElementById('btn-calculate');
var numeroUno = document.getElementById('numero-uno');
var numeroDos = document.getElementById('numero-dos');
var resultado = document.getElementById('result');

button.addEventListener('click', () => {
  console.log(typeof numeroUno.value);
  let proceso = suma(Number(numeroUno.value), Number(numeroDos.value));
  resultado.innerText = proceso;
  numeroUno.value = '';
  numeroDos.value = '';
});


