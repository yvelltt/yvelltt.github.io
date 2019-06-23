const close = document.querySelector('.close');
const open = document.querySelector('.open');
let modal = document.querySelector('.modal');
const title = document.querySelector('.header');

function test() {
  console.log('hi')
}

function openmodal() {
  console.log('hi')
  modal.style.display = "block";
}

function closemodal() {
  modal.style.display = "none";
}


close.addEventListener('click',closemodal); 
open.addEventListener('click',openmodal);