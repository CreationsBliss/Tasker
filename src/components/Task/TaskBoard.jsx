import React from "react";
import TaskSearch from "./TaskSearch";
import TaskList from "./TaskList";
import TaskAction from "./TaskAction";

const TaskBoard = () => {
  return (
    <div className="container mx-auto space-y-5">
      <TaskSearch></TaskSearch>
      <TaskAction></TaskAction>
      <TaskList></TaskList>
    </div>
  );
};

export default TaskBoard;
