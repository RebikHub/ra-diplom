/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getItems, getItemsMore } from "../store/middleware";
import Preloader from "./Preloader";
import ProductCard from "./ProductCard";

export default function Catalog(props) {
  const cat = useSelector((state) => state.categoriesSlice);
  const { loading, items } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch])

  console.log(items);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className={`nav-link ${cat.id === null ? 'active' : ''}`} href="#"
          onClick={() => dispatch(getItems())}>Все</a>
        </li>
        {cat.categories.map((el) => (
          <li className="nav-item" key={el.id}>
            <a className={`nav-link ${cat.id === el.id? 'active' : ''}`} href="#"
              onClick={() => dispatch(getItems(el.id))} >
              {el.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="row">
        {loading ? <Preloader/> : items.map((el) => <ProductCard item={el} key={el.id}/>)}
      </div>

      <div className="text-center">
        <button className="btn btn-outline-primary"
          onClick={() => dispatch(getItemsMore(cat.id, items.length))}>Загрузить ещё</button>
      </div>
    </section>
  );
};
