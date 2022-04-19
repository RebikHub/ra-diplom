import React from "react";
import { useSelector } from "react-redux";
import Catalog from "./Catalog";
import Preloader from "./Preloader";
import TopSales from "./TopSales";

export default function Main() {
  const { loading } = useSelector((state) => state.slices);

  return (
    <>
      {loading ? 
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
          <Preloader/>
      </section> : <TopSales/>}

      {loading ? 
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Preloader/>
      </section> : <Catalog/>}
    </>
  )
}
