import React from "react";
import { Route, Routes } from "react-router-dom";
import BosaCatalog from "./components/BosaCatalog";
import BosaHeaderFooter from "./components/BosaHeaderFooter";
import BosaMainLoaded from "./components/BosaMainLoaded";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BosaHeaderFooter/>}>
        <Route index element={<BosaMainLoaded/>}/>
        <Route path="/catalog" element={<BosaCatalog/>}/>
      </Route>
    </Routes>
  );
}
