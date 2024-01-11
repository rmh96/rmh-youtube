import React from "react";
import ButtonFilter from "./ButtonFilter";

const buttons = [
  "All",
  "News",
  "Live",
  "Music",
  "Tamil Cinema",
  "Comedy",
  "Front End Designs",
  "Trailers",
  "Cricket",
  "Cooking",
  "Football",
  "Stocks",
  "Recently Uploaded",
];

const ButtonFilters = () => {
  return (
    <div className="flex overflow-x-scroll font-semibold">
      {buttons.map((button, index) => {
        return <ButtonFilter key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonFilters;
