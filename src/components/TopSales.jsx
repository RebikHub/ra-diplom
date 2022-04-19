import React from 'react'
import { useSelector } from 'react-redux'
import Preloader from './Preloader';
import ProductCard from './ProductCard';

export default function TopSales() {
  const { loading, topSales } = useSelector((state) => state.slices);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {loading ? <Preloader/> : topSales.map((el) => <ProductCard items={el} />)}
      </div>
  </section>
  )
}
