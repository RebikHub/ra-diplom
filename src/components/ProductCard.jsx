import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={props}
          className="card-img-top img-fluid" alt={props}/>
        <div className="card-body">
          <p className="card-text">{props}</p>
          <p className="card-text">{props}</p>
          <Link to="/order" className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </div>
  )
}
