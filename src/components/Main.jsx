import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopSales } from "../store/middleware";
import Catalog from "./Catalog";
import Preloader from "./Preloader";
import TopSales from "./TopSales";

export default function Main() {
  const loadingTopSales = useSelector((state) => state.topSalesSlice.loading);
  const loadingItems = useSelector((state) => state.itemsSlice.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopSales());
  }, [dispatch])

  return (
    <>
      {loadingTopSales ? 
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Preloader/>
      </section> : <TopSales/>}

      {loadingItems ? 
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Preloader/>
      </section> : <Catalog/>}
    </>
  )
}
