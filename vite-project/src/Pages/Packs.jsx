import React, { useState } from "react";
import Home from "./Home";
import HyperLinks from "../components/HyperLinks";
import bg1 from "../assets/Screenshot 2024-10-10 153811.jpg";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img3.jpg"
import img10 from "../assets/img1.jpg"
import img11 from "../assets/img5.jpg"
import img12 from "../assets/img8.jpg"

const packs = [
  {
    id: 1,
    name: "Sequencers",
    category: "Max for Live",
    image: img1, // Updated to use img1
  },
  {
    id: 2,
    name: "MIDI Tools",
    category: "Max for Live",
    image: img2, // Updated to use img2
  },
  {
    id: 3,
    name: "Golden Era Hip-Hop Drums",
    category: "Sounds",
    image: img3, // Updated to use img3
  },
  {
    id: 4,
    name: "Trap Drums",
    category: "Sounds",
    image: img4, // Updated to use img4
  },
  {
    id: 5,
    name: "Granulator III",
    category: "Max for Live",
    image: img5, // Updated to use img5
  },
  {
    id: 6,
    name: "Lost and Found",
    category: "Sounds",
    image: img6, // Updated to use img6
  },
  {
    id: 7,
    name: "Performance Pack",
    category: "Max for Live",
    image: img7, // Updated to use img7
  },
  {
    id: 8,
    name: "Expressive Choir",
    category: "Sounds",
    image: img8, // Updated to use img8
  },
  {
    id: 9,
    name: "Wavetable",
    category: "Software Instruments",
    image: img9, // Updated to use img9
  },
  {
    id: 10,
    name: "Sampler",
    category: "Software Instruments",
    image: img10, // Updated to use img10
  },
  {
    id: 11,
    name: "Operator",
    category: "Software Instruments",
    image: img11, // Updated to use img11
  },
  {
    id: 12,
    name: "Amp",
    category: "Software Instruments",
    image: img12, // Updated to use img12
  },
];

const categories = ["All", "Sounds", "Max for Live", "Software Instruments"];

function Packs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPacks =
    selectedCategory === "All"
      ? packs
      : packs.filter((pack) => pack.category === selectedCategory);

  return (
    <div>
      <Home />
      <section className="flex bg-solidStone w-full h-[60vh]">
        <div className=" p-32 w-[120vh]">
          <p className="text-yellow-400 text-6xl font-medium mb-8">
            Sequencers
          </p>
          <p className="text-yellow-400 text-3xl font-medium mb-8">
            Explore new patterns with three versatile step sequencers
          </p>
          <div className="text-yellow-400 text-3xl font-medium">
            <HyperLinks
              link={"https://www.ableton.com/en/packs/sequencers/"}
              text={"Learn more"}
            />
          </div>
        </div>
        <div>
          <img
            src={bg1}
            alt="Background for Sequencers"
            className="object-cover"
          ></img>
        </div>
      </section>

      <section className="mr-36 ml-36 pt-12">
        <div className="space-x-4 font-semibold text-lg">
          {categories.map((category, id) => (
            <button key={id} onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        <div className="w-full h-0.5 bg-slate-200 mt-12"></div>

        <div className="grid grid-cols-4 gap-6 mt-12">
          {filteredPacks.map((pack) => (
            <div key={pack.id} className=" w-full h-[80vh]">
              <img src={pack.image} alt={pack.name} className="w-50 h-50 pb-2" />
              <button className="text-red-600">{pack.category}</button>
              <p className="text-blue-950 font-semibold text-lg">{pack.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packs;
