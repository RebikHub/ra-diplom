import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getTopSales } from "../store/middleware";
import Catalog from "./Catalog";
import Preloader from "./Preloader";
import TopSales from "./TopSales";

export default function Main() {
  const { loading } = useSelector((state) => state.listSlices);
  const dispatch = useDispatch();

  console.log(loading);

  useEffect(() => {
    dispatch(getTopSales());
    dispatch(getCategories());
  }, [dispatch])

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
      {/* <TopSales/>
      <Catalog/> */}
    </>
  )
}
