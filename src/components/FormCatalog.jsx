import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSearch } from '../store/middleware';

export default function FormCatalog() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  return (
    <form className="catalog-search-form form-inline"
      onSubmit={() => {
        dispatch(getSearch(input));
        return setInput('');
      }}>
      <input className="form-control" placeholder="Поиск"
      value={input}
      onChange={(ev) => setInput(ev.target.value)}/>
    </form>
  )
}
