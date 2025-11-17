import React from "react";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <form className="flex flex-col gap-4 bg-blue-800 text-white font-bold p-4">
        <label htmlFor="">nombre de usuario</label>
        <input
          type="text"
          placeholder="username"
          className="bg-white text-gray-500"
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="password"
          className="bg-white text-gray-500"
        />
        <button className="bg-green-700 p-2 rounded-2xl">enviar</button>
      </form>
    </div>
  );
}
