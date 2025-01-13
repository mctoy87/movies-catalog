export const Modal = () => (
  <div className="modal">
    <div className="modal__main">
      <div className="modal__container">
        {/* Форма входа */}
        <form className="modal__form modal__form-active" id="loginForm">
          <h2 className="modal__title">Вход</h2>
          <input className="modal__login" type="text" placeholder="Логин" required />
          <input className="modal__password" type="password" placeholder="Пароль" required />
          <button className="modal__submit" type="submit">Войти</button>
          <p className="modal__login-wrapper">Нет аккаунта?
            <a className="modal__login-link" href="#">Зарегистрируйтесь</a>
          </p>
        </form>

        {/* Форма регистрации */}
        <form className="modal__form" id="registrationForm">
          <h2 className="modal__title">Регистрация</h2>
          <input className="modal__login" type="text" placeholder="Имя" required />
          <input className="modal__email" type="email" placeholder="Email" required />
          <input className="modal__password" type="password" placeholder="Пароль" required />
          <button className="modal__submit" type="submit">Зарегистрироваться</button>
          <p className="modal__signin-wrapper">Уже есть аккаунт?
            <a className="modal__signin-link" href="#">Войдите</a>
          </p>
        </form>
      </div>

      <button className="modal__close">&#10006;</button>
    </div>
  </div>
);
