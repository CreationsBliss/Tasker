import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "React Native",
    description:
      "Competently orchestrate proactive benefits through intermandated models",
    priority: "High",
    tags: ["JS", "React", "Programming"],
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([initialTask]);
  const [openModal, setOpenModal] = useState(false);

  const handleAddTasks = (newTask) => {
    setTasks([...tasks, newTask]);
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container mx-auto space-y-5">
      {openModal && <AddTaskModal onAddTask={handleAddTasks} onCloseModal={handleCloseModal}></AddTaskModal>}
      <TaskSearch></TaskSearch>
      <TaskAction onAddClick={() => setOpenModal(true)}></TaskAction>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
};

export default TaskBoard;
