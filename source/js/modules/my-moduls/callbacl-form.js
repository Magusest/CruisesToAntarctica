import {Form} from '../form-validate/form';

const formValidator = new Form();
const form = document.querySelector('[data-form]');
const modal = document.querySelector('[data-modal="success"]');
const error = document.querySelector('[data-modal="error"]');
const phoneInput = document.querySelector('[data-phone-input]');

const clickHendler = () => {
  modal.classList.remove('is-active');
  error.classList.remove('is-active');
};

const onDocumentKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-active');
    error.classList.remove('is-active');
  }
};

const modalHandler = () => {
  document.addEventListener('click', clickHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const errorHandler = () => {
  document.addEventListener('click', clickHendler);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const submitHednler = (evt) => {
  if (phoneInput.querySelector('input').value.length === 18) {
    evt.preventDefault();
    form.reset();
    modal.classList.add('is-active');
    modalHandler();
  } else {
    evt.preventDefault();
    error.classList.add('is-active');
    errorHandler();
    phoneInput.querySelector('input').focus();
  }
};

function validateForm() {
  formValidator.initPhoneInput(phoneInput);
  formValidator.init();
  form.addEventListener('submit', submitHednler);
}

export {
  validateForm
};
