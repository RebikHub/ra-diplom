import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableCart from "./TableCart";

export default function Cart() {
  const [order, setOrder] = useState([]);
  const { orders } = useSelector((state) => state.cartSlice);
  console.log(orders);

  useEffect(() => {
    const local = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const id = localStorage.key(i);
        local.push(JSON.parse(localStorage.getItem(id)));
      }
      setOrder(local);
  }, [orders.length]);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {order.map((el, i) => <TableCart item={el} i={i} key={i}/>)}
            <tr>
              <td colSpan={5} className="text-right">Общая стоимость</td>
              <td>{order.reduce((a, b) => a + (b.price * b.amount), 0)}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement"/>
              <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
          </form>
        </div>
      </section>
    </>
  );
};
