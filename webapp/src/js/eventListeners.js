import { closeBtn, posterElement, movieList, catalogContainer, movies } from "./dom.js"
import { getFilmDetails, handlePosterClose } from "./film.js";
import { modalController } from "./modal.js";
import { getIsPosterOpen, setIsIsPosterOpen } from "./state.js";



export const setupEventListeners = () => {
  // Открытие постера по клику на карточку фильма
  movieList.addEventListener('click', (event) => {
    const target = event.target.closest('.card');
    if (target) {
      //получает id из карточки 
      const filmId = Number(target.dataset.id);
      // Проверяем состояние постера
      if (!getIsPosterOpen()) {
        movies.style.maxWidth = '65%';
        posterElement.style.display = 'block';
        setIsIsPosterOpen(true); // Обновляем состояние
      }

      // Получаем детали фильма и наполняем постер
      getFilmDetails(filmId);
    }
  });

  // Закрытие постера по клику вне постера или на кнопку закрытия
  posterElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('hero__close') || event.target === posterElement) {
      handlePosterClose();
    }
  });

  // Настройка открытия модального окна для входа
  modalController({
    modal: '.modal',
    btnOpen: '.header__nav-login',
    btnClose: '.modal__close',
    time: 200,
  });

  // Инициализация переключения форм
  initFormSwitching();
};

// Функция для обработки логики переключения форм
const initFormSwitching = () => {
  const loginLink = document.querySelector('.modal__login-link'); // Ссылка "Войдите"
  const registrationLink = document.querySelector('.modal__signin-link'); // Ссылка "Зарегистрируйтесь"

  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault(); // Предотвращаем переход по ссылке
      showRegistration(); // Показываем форму регистрации
    });
  }

  if (registrationLink) {
    registrationLink.addEventListener('click', (e) => {
      e.preventDefault(); // Предотвращаем переход по ссылке
      showLogin(); // Показываем форму входа
    });
  }
};

// Функции для показа форм
const showRegistration = () => {
  document.getElementById('loginForm').classList.remove('modal__form-active');
  document.getElementById('registrationForm').classList.add('modal__form-active');
}

const showLogin = () => {
  document.getElementById('registrationForm').classList.remove('modal__form-active');
  document.getElementById('loginForm').classList.add('modal__form-active');
};