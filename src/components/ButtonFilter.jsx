import React from "react";

const ButtonFilter = ({ name }) => {
  return (
    <button className="block text-ellipsis py-1 px-3.5 m-3 rounded-xl bg-gray-300 max-w-full">
      {name}
    </button>
  );
};

export default ButtonFilter;
