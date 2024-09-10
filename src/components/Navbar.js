import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import RegWindow from "./RegWindow";

const Navbar = () => {
  const [isRegWindowOpen, setIsRegWindowOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/#frontpage" smooth>
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/#aboutus" smooth className="">
          О нас
        </Link>
        <Link to="/#services" smooth className="">
          Услуги
        </Link>
        <Link to="/#footer" smooth className="">
          Контакты
        </Link>
      </div>
      <div className={`navbarContacts ${isMenuOpen ? 'open' : ''}`}>
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

        <div className="phoneNumber" onClick={openRegWindow}>
          <a>
            {phoneNumbers[selectedCity]}
            <div className="callBack">заказать обратный звонок</div>
          </a>
        </div>
        <button className="request" onClick={openRegWindow} style={{}}>
          Оставить заявку
        </button>
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
