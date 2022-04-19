import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BosaHeader() {
  const [inputForm, setInputForm] = useState('invisible');

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
            <img src="./img/header-logo.png" alt="Bosa Noga"/>
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/"}>Главная</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/catalog"}>Каталог</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>О магазине</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contacts"}>Контакты</Link>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" onClick={toggleSearch} className="header-controls-pic header-controls-search"></div>
                  {/* Do programmatic navigation on click to /cart.html */}
                  <div className="header-controls-pic header-controls-cart">
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
