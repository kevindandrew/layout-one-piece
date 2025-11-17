import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function ViceLayout() {
  return (
    <>
      <div className="h-screen flex flex-col  ">
        <header className="w-full bg-blue-800 text-white p-4 flex items-center justify-center">
          ZORO
        </header>
        <div className="flex h-full items-center ">
          <aside className="h-full w-72 flex items-center justify-center flex-col gap-4 bg-blue-800 text-white font-bold">
            <Link to="/vice">tripulacion</Link>
            <Link to="/vice/inventario">Inventario</Link>
            <Link to="/vice/mapas">Mapas</Link>
          </aside>
          <Outlet />
        </div>
      </div>
    </>
  );
}
