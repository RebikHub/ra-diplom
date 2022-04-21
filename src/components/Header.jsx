import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import headerLogo from '../img/header-logo.png';
import { getSearch } from '../store/middleware';
import { clearSearch } from '../store/searchSlice';
import FormSearch from './FormSearch';

export default function Header() {
  const { search } = useSelector((state) => state.searchSlice);
  const [inputForm, setInputForm] = useState('invisible');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  function toggleSearch() {
    if (inputForm === 'invisible' && search === '') {
      setInputForm('');
    } else if (inputForm === '' && search === '') {
      setInputForm('invisible');
    } else if (inputForm === '' && search !== '') {
      setInputForm('invisible');
      navigate('/catalog');
      dispatch(getSearch(search));
    } else if (inputForm === '' && search !== '' && location.pathname !== '/catalog') {
      setInputForm('');
      dispatch(clearSearch());
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
                  <div className="header-controls-pic header-controls-cart" onClick={() => navigate('/cart')}>
                    {localStorage.length !== 0 ?
                    <div>
                      <div className="header-controls-cart-full">{localStorage.length}</div>
                      <div className="header-controls-cart-menu"></div>
                    </div> : null}
                  </div>
                </div>
                <FormSearch classStyle={`header-controls-search-form ${inputForm}`}/>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
};
