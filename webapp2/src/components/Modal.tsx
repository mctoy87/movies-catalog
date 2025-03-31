import {useEffect} from 'react';
import {FormType} from '../types/modal';

type ModalProps = {
  onClose: () => void;
  formType: FormType;
  onFormChange: (type: FormType) => void;
};

export const Modal = ({onClose, formType, onFormChange}: ModalProps) => {
  // Закрытие на Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Закрытие на клик по overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal')) {
      onClose();
    }
  };

  if (formType !== 'login' && formType !== 'register') {
    throw new Error(`Invalid formType: ${formType}`);
  }
  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal__main">
        <div className="modal__container">
          {/* Форма входа */}
          <form
            className={`modal__form ${formType === 'login' ? 'modal__form-active' : ''}`}
            id="loginForm"
          >
            <h2 className="modal__title">Вход</h2>
            <input
              className="modal__login"
              type="text"
              placeholder="Логин"
              required
            />
            <input
              className="modal__password"
              type="password"
              placeholder="Пароль"
              required
            />
            <button
              onClick={() => onFormChange('login')}
              className="modal__submit"
              type="submit"
            >
              Войти
            </button>
            <p className="modal__login-wrapper">
              Нет аккаунта?
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onFormChange('register');
                }}
                className="modal__login-link"
                href="#"
                role="button"
                aria-label="Зарегистрироваться"
              >
                Зарегистрируйтесь
              </a>
            </p>
          </form>

          {/* Форма регистрации */}
          <form
            className={`modal__form ${formType === 'register' ? 'modal__form-active' : ''}`}
            id="registrationForm"
          >
            <h2 className="modal__title">Регистрация</h2>
            <input
              className="modal__login"
              type="text"
              placeholder="Имя"
              required
            />
            <input
              className="modal__email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="modal__password"
              type="password"
              placeholder="Пароль"
              required
            />
            <button className="modal__submit" type="submit">
              Зарегистрироваться
            </button>
            <p className="modal__signin-wrapper">
              Уже есть аккаунт?
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onFormChange('login');
                }}
                className="modal__signin-link"
                href="#"
                role="button"
                aria-label="Войдите"
              >
                Войдите
              </a>
            </p>
          </form>
        </div>

        <button onClick={onClose} className="modal__close">
          &#10006;
        </button>
      </div>
    </div>
  );
};
