const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="Logo" />
      <a className="">О нас</a>
      <a className="">Услуги</a>
      <a className="">Контакты</a>
      <a className="location">
        <img src="/location.svg" alt="Location" /> Москва
      </a>
      <div className="phoneNumber">
        {" "}
        <div>+7 (916) 830-58-58</div>
        <div>заказать обратный звонок</div>
      </div>
      <a className="request" href="./">
        Оставить заявку
      </a>
    </nav>
  );
};

export default Navbar;
