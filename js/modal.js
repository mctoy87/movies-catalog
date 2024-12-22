export const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = (event) => {
    const target = event.target;

    if (
      target === modalElem || 
      btnClose && target.closest(btnClose) ||
      event.code === 'Escape'
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
        // сбрасываем форму внутри модалки до начальной (login)
        showLogin();
      }, time);

      window.removeEventListener('keydown', closeModal);

      
    }
  };

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;

    window.addEventListener('keydown', closeModal);
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  })

  modalElem.addEventListener('click', closeModal);

};

// Функции для показа форм
export const showRegistration = () => {
  document.getElementById('loginForm').classList.remove('modal__form-active');
  document.getElementById('registrationForm').classList.add('modal__form-active');
}

export const showLogin = () => {
  document.getElementById('registrationForm').classList.remove('modal__form-active');
  document.getElementById('loginForm').classList.add('modal__form-active');
};

