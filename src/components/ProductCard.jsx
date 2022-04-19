import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addOrderItem } from '../store/listSlices';

export default function ProductCard({item}) {
  const dispatch = useDispatch();
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={item.images[0]}
          className="card-img-top img-fluid" alt={item.title}/>
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-price">{item.price}</p>
          <Link to="/order" 
            className="btn btn-outline-primary"
            onClick={() => dispatch(addOrderItem({item}))}
            >Заказать</Link>
        </div>
      </div>
    </div>
  )
}
