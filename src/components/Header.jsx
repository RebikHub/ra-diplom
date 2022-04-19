import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import headerLogo from '../img/header-logo.png';

export default function Header() {
  const [inputForm, setInputForm] = useState('invisible');
  const navigate = useNavigate();
  function toggleSearch() {
    if (inputForm === '') {
      setInputForm('invisible');
    } else {
      setInputForm('');
    };
  };

  return (
    <header className="container">
      <div className="row">
        <div className="col">

          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to={"/"}>
              <img src={headerLogo} alt="Bosa Noga"/>
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/"}>Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/catalog"}>Каталог</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/about"}>О магазине</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/contacts"}>Контакты</NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" onClick={toggleSearch} className="header-controls-pic header-controls-search"></div>
                  {/* Do programmatic navigation on click to /cart.html */}
                  <div className="header-controls-pic header-controls-cart" onClick={() => navigate('/basket')}>
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className={`header-controls-search-form form-inline ${inputForm}`}>
                  <input className="form-control" autoFocus placeholder="Поиск"/>
                </form>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
};
