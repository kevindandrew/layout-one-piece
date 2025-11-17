import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginLayout from "./layouts/LoginLayout";
import Home from "./pages/Capitan/Home";
import Characters from "./pages/Capitan/Characters";
import Contact from "./pages/Capitan/Contact";
import Login from "./pages/Login";
import Tripulacion from "./pages/Vicecapitan/Tripulacion";
import Mapas from "./pages/Vicecapitan/Mapas";
import Inventario from "./pages/Vicecapitan/Inventario";
import ViceLayout from "./layouts/ViceLayout";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="/vice" element={<ViceLayout />}>
          <Route index element={<Tripulacion />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="mapas" element={<Mapas />} />
        </Route>
        <Route path="/Login" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
