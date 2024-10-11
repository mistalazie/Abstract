import React from "react";
import Home from "./Home";
import HyperLinks from "../components/HyperLinks";

const articles = [
  "What's new in Ableton Live 12",
  "Accessibility in Ableton Live FAQ",
  "Browser and Tags in Live 12 FAQ",
  "Keys and Scales in Live 12 FAQ",
  "Live Minimum System Requirements",
  "Troubleshooting a crash",
  "Switching from Live Beta to the release version of Live",
  "Transaction declined in webshop",
  "Authorizing Live",
  "Buying Push FAQ",
  "Note FAQ",
];

const SuggestedArticles = () => (
  <div className="flex flex-col">
    <p className="font-semibold text-xl mb-4 font-serif">Suggested Articles</p>
    {articles.map((article, index) => (
      <a key={index} href="#" className="text-blue-500 hover:underline mb-1">
        {article}
      </a>
    ))}
  </div>
);

const SearchForm = () => (
  <form className="flex items-center">
    <div className="flex focus-within:ring-2 focus-within:ring-black border border-gray-300 rounded">
      <input
        className="w-[70vh] h-10 px-4 py-2 rounded-l bg-gray-200 focus:outline-none"
        placeholder='Keyword, e.g. "installation"'
        type="text"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </div>
  </form>
);

function Help() {
  return (
    <div>
      <Home />
      <nav className="backdrop-blur-sm bg-slate-50 sticky top-0 bg-opacity-90 w-full h-12">
        <ul className="flex h-full items-center m-8 space-x-4">
          <li>Overview</li>
          <li>Learn Live</li>
          <li>Learn Push</li>
        </ul>
      </nav>
      <div className="p-32">
        <h1 className="text-7xl font-medium pb-20 font-serif">Need help?</h1>
        <div className="flex h-screen">
          <div className="flex-1 pr-40">
            <p className="font-bold mb-4 text-2xl">Knowledge Base</p>
            <p className="mb-4">
              Find help articles on all of our products plus support for your
              shopping and product license questions.
            </p>
            <HyperLinks link={"https://help.ableton.com/hc/en-us"} text={"Go to Knowledge base"} />

            <p className="font-semibold text-xl mb-4">
              Search the Knowledge Base:
            </p>
            <SearchForm />
          </div>
          <div className="flex-1">
            <SuggestedArticles />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
