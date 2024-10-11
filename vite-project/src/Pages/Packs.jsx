import React from "react";
import Home from "./Home";
import HyperLinks from "../components/HyperLinks";
import bg1 from "../assets/Screenshot 2024-10-10 153811.jpg";

const PackCategories = () => {
  const categories = [
    "All",
    "Sounds",
    "Max for Live",
    "Software Instruments",
    "Bundles",
    "Free"
  ];

  return (
    <nav>
      <ul className="flex w-full space-x-8 font-medium text-lg">
        {categories.map((category, index) => (
          <li key={index}>
            <p className="">{category}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};


function Packs() {
  return (
    <div>
      <Home />
      <section className="flex bg-solidStone w-full h-[60vh]">
        <div className=" p-32 w-[120vh]">
          <p className="text-yellow-400 text-6xl font-medium mb-8">Sequencers</p>
          <p className="text-yellow-400 text-3xl font-medium mb-8">Explore new patterns with three versatile step sequencers</p>
          <div className="text-yellow-400 text-3xl font-medium"><HyperLinks link={"https://www.ableton.com/en/packs/sequencers/"} text={"Learn more"}/></div>
        </div>
        <div>
          <img src={bg1} alt="Background for Sequencers" className="object-cover" ></img>
        </div>
      </section>
      <div className="">
       <PackCategories />
      </div>
    </div>
  );
}

export default Packs;
