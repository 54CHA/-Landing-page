import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import RegWindow from "./RegWindow";

const Navbar = () => {
  const [isRegWindowOpen, setIsRegWindowOpen] = useState(false);

  const openRegWindow = () => setIsRegWindowOpen(true);
  const closeRegWindow = () => setIsRegWindowOpen(false);
  const [selectedCity, setSelectedCity] = useState("Москва");

  const cities = ["Москва", "Санкт-Петербург"];

  const phoneNumbers = {
    Москва: "+7 (916) 830-58-58",
    "Санкт-Петербург": "+7 (916) 830-58-58",
  };

  const selectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <nav className="navbar">
      <Link to="/#frontpage">
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <div className="navbar-links">
        <Link to="/#aboutus" className="">
          О нас
        </Link>
        <Link to="/#services" className="">
          Услуги
        </Link>
        <Link to="/#footer" className="">
          Контакты
        </Link>
      </div>
      <div className="navbarContacts">
        <div className="location-dropdown">
          <div className="location-button">
            <img src="/location.svg" alt="Location" /> {selectedCity}{" "}
            <span className="dropdown-arrow">&#9662;</span>
          </div>
          <ul className="city-list">
            {cities.map((city) => (
              <li key={city} onClick={() => selectCity(city)}>
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="phoneNumber">
          <Link to="/tech">
            {phoneNumbers[selectedCity]}
            <div className="callBack">заказать обратный звонок</div>
          </Link>
        </div>
        <a className="request" onClick={openRegWindow}>
          Оставить заявку
        </a>
      </div>
      <RegWindow
        isOpen={isRegWindowOpen}
        onClose={closeRegWindow}
        selectedCity={selectedCity} // Pass the selected city as a prop
      />
    </nav>
  );
};

export default Navbar;
