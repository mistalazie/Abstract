import React from "react";

const HyperLinks = ({link, text}) => {
    return (
        <p className="mb-8 text-lg">
              <a
                href={link} 
                className=" text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Go to the Knowledge Base"
              >
                {text}
              </a>
            </p>
    )
}

export default HyperLinks;