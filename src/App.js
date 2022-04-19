import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Basket from "./components/Basket";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import FormCatalog from "./components/FormCatalog";
import HeaderAndFooter from "./components/HeaderAndFooter";
import Main from "./components/Main";
import Order from "./components/Order";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderAndFooter/>}>
        <Route index element={<Main/>}/>
        <Route path="/catalog" element={
          <Catalog>
            <FormCatalog/>
          </Catalog>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
  );
}
