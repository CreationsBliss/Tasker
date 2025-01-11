import React from "react";

const TaskAction = ({ onAddClick }) => {
  return (
    <div className="container px-2 mx-auto grid gap-4 grid-cols-2 md:grid-cols-4">
      <button className="px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-md sm:mt-0 sm:mx-2 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40">
        All Task
      </button>

      <button className="px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lime-600 rounded-md sm:mt-0 sm:mx-2 hover:bg-lime-500 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-opacity-40">
        Favorite Task
      </button>

      <button
        onClick={onAddClick}
        className="px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-md sm:mt-0 sm:mx-2 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40"
      >
        Add Task
      </button>

      <button className="px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:mt-0 sm:mx-2 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40">
        Delete All
      </button>
    </div>
  );
};

export default TaskAction;
