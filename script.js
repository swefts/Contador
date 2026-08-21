const numeros = document.getElementById('numeros');
const mais = document.getElementById('mais');
const menos = document.getElementById('menos');

mais.addEventListener ('click', function () {
  if (Number(numeros.textContent) < 10) {
  numeros.textContent = Number(numeros.textContent) + 1;
}});

menos.addEventListener ('click', function () {
  if (Number(numeros.textContent) > 0) {
  numeros.textContent = Number(numeros.textContent) - 1;
  }
})