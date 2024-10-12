import React, { useState } from "react";
import Home from "./Home";
import LiveImg from "../assets/Live.jpg"
import Live from "../Pages/Live"

const shoppingCategories = [
  "Overview",
  "Live",
  "Push",
  "Move",
  "Educational offers",
  "Max for Live",
  "Merchandise",
];

function Shop() {
  const [shopCategories, setShopCategories] = useState("Overview");
  return (
    <div>
      <Home />
      <section className="mx-12 my-8">
        <div className="space-x-4 font-semibold">
          {shoppingCategories.map((category) => (
            <button key={category} onClick={() => setShopCategories(category)}>
              {category}
            </button>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="bg-rose-300 h-[100vh]">
          <div className="p-40">
            <p className="mb-8 font-semibold text-6xl">Live</p>
            <p className="mb-8">
              Get lost in instruments, effects and creative features. Find your
              own way of making music.
            </p>
            <button className="mb-8">Buy now</button>
          </div>
          <div>
            <img src={LiveImg} className="rounded-lg"></img>
          </div>
        </div>

        <div className="bg-slate-300 h-[100vh]">Move</div>

        <div className="bg-gradient-to-b from-blue-950 to-black h-[100vh]">
          Push
        </div>

        <div className="bg-black h-[100vh]">Max for Live</div>

        <div className="bg-green-400 h-80">Packs</div>

        <div className="bg-cyan-400 h-80">Merchandise</div>

      </section>
    </div>
  );
}

export default Shop;
