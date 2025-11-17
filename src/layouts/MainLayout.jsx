import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <div className="h-screen flex flex-col  ">
        <header className="w-full bg-red-800 text-white p-4 flex items-center justify-center">
          {" "}
          JUAN PEREZ
        </header>
        <div className="flex h-full items-center ">
          <aside className="h-full w-72 flex items-center justify-center flex-col gap-4 bg-red-800 text-white font-bold">
            <Link to="/">Home</Link>
            <Link to="/Characters">Characters</Link>
            <Link to="/Contact">Contact</Link>
          </aside>
          <Outlet />
        </div>
      </div>
    </>
  );
}
