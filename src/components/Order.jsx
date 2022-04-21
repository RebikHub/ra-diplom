import React from 'react'
import { useSelector } from 'react-redux'
import Preloader from './Preloader';

export default function Order() {
  const { item, loading } = useSelector((state) => state.itemsSlice);

  console.log(item);

  if (loading) {
    return <Preloader/>
  };

  return (
    <section className="catalog-item">
      <h2 className="text-center">{item.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={item.images[0]} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{item.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{item.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{item.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{item.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{item.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{item.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>Размеры в наличии:
            {/* ${el.avalible ? 'selected' : ''} */}
              {item.sizes.map((el,i) => el.avalible ?
                <span className="catalog-item-size" key={i}>{el.size}</span> : null)}
            </p>
            {item.sizes.some((el) => el.avalible === true) ?
            <p>Количество:
            <span className="btn-group btn-group-sm pl-2">
              <button className="btn btn-secondary">-</button>
              <span className="btn btn-outline-primary">1</span>
              <button className="btn btn-secondary">+</button>
            </span>
            </p>: null}
          </div>
            {item.sizes.some((el) => el.avalible === true) ?
              <button className="btn btn-danger btn-block btn-lg">В корзину</button> : null}
        </div>
      </div>
    </section>
  );
};
