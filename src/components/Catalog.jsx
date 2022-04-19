import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getItems } from "../store/middleware";
import Preloader from "./Preloader";
import ProductCard from "./ProductCard";

export default function Catalog(props) {
  const { loading, items, categories } = useSelector((state) => state.listSlices);
  const dispatch = useDispatch();
  function handleGetItems(id) {
    if (id) {
      return dispatch(getItems(id));
    }
    return dispatch(getItems());
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/catalog">Все</NavLink>
        </li>
        {categories.map((el) => (
          <li className="nav-item" key={el.id}>
            <NavLink className="nav-link" 
              onClick={() => handleGetItems(el.id)} to="/catalog">
              {el.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="row">
        {loading ? <Preloader/> : items.map((el) => <ProductCard items={el} />)}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary">Загрузить ещё</button>
      </div>
    </section>
  );
};
