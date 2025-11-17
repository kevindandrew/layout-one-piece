import React from "react";
import { Outlet } from "react-router-dom";
export default function LoginLayout() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-400">
      <Outlet />
    </div>
  );
}
