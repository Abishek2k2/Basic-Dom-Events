'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

//DRY method to avoid repeatation
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  //DRY method to avoid repeatation
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Adding and removing elements
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
//we don't need an  array element for close modal btn

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// keyboard events {esc} they are global events\
// listening events everywhere
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
