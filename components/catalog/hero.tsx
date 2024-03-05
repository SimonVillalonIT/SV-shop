import React from "react";

const Hero = () => (
  <div className="relative select-none justify-evenly h-[calc(100vh-5rem)] bg-center bg-cover bg-[url('/hero-catalog.jpg')]">
    <div className="absolute w-full h-full top-0 left-0 bg-black/30 grid grid-rows-12 grid-cols-1 justify-items-center text-white">
      <div className="flex flex-col justify-evenly items-center row-start-6 row-span-3">
        <span className="uppercase font-semibold text-xs">
          new in
        </span>
        <span className="uppercase text-4xl">woman</span>
      </div>
      <p className="self-start row-start-9 font-medium">
        Explore the looks with ready-to-wear clothes and accesories from the
        Spring-Summer 2024 collection for woman
      </p>
    </div>
  </div>
);

export default Hero;
