let box = document.querySelector('.box');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let titulo = document.querySelector('#titulo');

function first() {
  box.textContent = 'Primeiro Teste';
}
first();

function second() {
  return 'Secundo teste';
}
box2.textContent = second();

box3.textContent = 'Terceiro teste';
const third = () => {};
third();

const forth = () => {
  return 'Quarto Teste';
};
box4.textContent = forth();

titulo.addEventListener('click', function () {
  titulo.textContent = 'Clicou em mim';
});
