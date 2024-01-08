import React from "react";

const ButtonFilter = ({ name }) => {
  return (
    <button className="block text-ellipsis py-2 px-3 m-3 rounded-xl bg-gray-300 max-w-full">
      {name}
    </button>
  );
};

export default ButtonFilter;
