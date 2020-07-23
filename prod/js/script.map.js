var search_btn = document.querySelector('.search-form__btn--open-form');
var search_modal = document.querySelector('.search-form__main-form');

search_btn.addEventListener('click', function (evt) {
evt.preventDefault();
search_modal.classList.toggle('modal-open');
});