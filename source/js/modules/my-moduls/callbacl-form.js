
const form = document.querySelector('[data-form]');
const modal = document.querySelector('[data-modal="success"]');

const clickHendler = () => {
  modal.classList.remove('is-active');
};

const onDocumentKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-active');
  }
};


const modalHendler = () => {
  document.addEventListener('click', clickHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const submitHednler = (evt) => {
  evt.preventDefault();
  form.reset();
  modal.classList.add('is-active');
  modalHendler();
};

function validateForm() {
  form.addEventListener('submit', submitHednler);
}

export {
  validateForm
};
