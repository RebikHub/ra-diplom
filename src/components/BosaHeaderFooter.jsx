import React from 'react'
import { Outlet } from 'react-router-dom';
import BosaFooter from './BosaFooter'
import BosaHeader from './BosaHeader'

export default function BosaHeaderFooter(props) {
  console.log(props);
  return (
    <>
      <BosaHeader/>
        <Outlet/>
      <BosaFooter/>
    </>
  )
}
