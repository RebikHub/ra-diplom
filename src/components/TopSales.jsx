import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

export default function TopSales() {
  const { topSales } = useSelector((state) => state.listSlices);
  console.log(topSales);
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {topSales.map((el) => <ProductCard item={el} key={el.id}/>)}
      </div>
  </section>
  )
}
