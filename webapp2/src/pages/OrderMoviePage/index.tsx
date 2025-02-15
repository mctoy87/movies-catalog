export const OrderMoviePage = () => {
  console.log();
  return (
    <div className="order">
      <div className="order__main">
        <div className="order__container">
          <h1 className="order__title">
            Страница бронирования выбранного кинофильма будет здесь скоро
          </h1>
          {/* Форма входа */}
          <form
            className="order__form order__form-active"
            id="orderForm"
          ></form>
        </div>
      </div>
    </div>
  );
};
