import React, { useState } from "react";

const AddTaskModal = ({ onAddTask, onCloseModal }) => {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const handleAddTask = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-10"></div>
      <div className="container mx-auto max-w-lg fixed inset-0 z-20 flex items-center justify-center">
        <div className="bg-black border rounded-lg border-gray-200 max-w-[600px] max-h-[900px] p-10 shadow-lg dark:border-gray-700 relative">
          <h2 className="text-xl text-center font-bold text-gray-800 dark:text-[#F1BC2D] lg:text-2xl">
            Add New Task
          </h2>
          <button
            onClick={onCloseModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          >
            ✕
          </button>
          <form onSubmit={() => onAddTask(task)}>
            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Title
              </label>
              <input
                onChange={handleAddTask}
                type="text"
                name="title"
                value={task.title}
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Description
              </label>
              <textarea
                onChange={handleAddTask}
                name="description"
                value={task.description}
                className="block w-full h-20 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-20 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              ></textarea>
            </div>

            <div className="-mx-2 mt-4 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Tags
                </label>
                <input
                  onChange={handleAddTask}
                  name="tags"
                  value={task.tags}
                  type="text"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Priority
                </label>
                <select
                  onChange={handleAddTask}
                  name="priority"
                  value={task.priority}
                  className="select block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option>Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 mt-5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Save Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
