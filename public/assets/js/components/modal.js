export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),
  
  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
};

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
}

function handleCloseButtonClick() {
  Modal.close();
}

window.addEventListener('keydown', handleKeyDown);
Modal.btnClose.addEventListener('click', handleCloseButtonClick);
