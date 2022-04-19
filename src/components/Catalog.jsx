import React from "react";
import { useSelector } from "react-redux";
import Preloader from "./Preloader";
import ProductCard from "./ProductCard";

export default function Catalog(props) {
  const { loading, items } = useSelector((state) => state.slices);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {props.children}
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Все</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Женская обувь</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Мужская обувь</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Обувь унисекс</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Детская обувь</a>
        </li>
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
