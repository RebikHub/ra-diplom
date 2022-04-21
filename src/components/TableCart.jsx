import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../store/cartSlice';

export default function TableCart({item, i}) {
  const dispatch = useDispatch();

  function removeOrder(id) {
    console.log(id);
    localStorage.removeItem(id);
    dispatch(removeItem(id));
  }

  return (
    <tr>
      <td>{i + 1}</td>
      <td><a href="/products/1.html">{item.title}</a></td>
      <td>{item.size}</td>
      <td>{item.amount}</td>
      <td>{item.price}</td>
      <td>{item.amount * item.price}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm"
          onClick={() => removeOrder(item.id)}>Удалить</button>
      </td>
    </tr>
  )
}
