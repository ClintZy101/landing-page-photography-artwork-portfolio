import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between px-[5rem] pt-[30px]">
      <h1 className="text-xl font-bold">Clint Tay</h1>
      <div className="flex space-x-5">
        <h1 className="text-xl  hover:underline">Work</h1>
        <h1 className="text-xl ">About</h1>
      </div>
    </div>
  );
}
