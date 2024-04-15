import React from "react";
import Task from "../common/Task";
import AddTaskButton from "../common/AddTaskButton";
import "./Today.css";

const Today = ({ tasks, handleOptionSelect, handleTaskOptionSelect }) => {
  const isToday = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };
  const todayTasks = tasks && tasks.filter((task) => isToday(task.deadline));

  return (
    <div className="today-container">
      <div className="today-inner-container">
        <h1>Today</h1>
        {tasks &&
          todayTasks.map((task) => {
            return (
              <Task key={task.id} task={task} info={task.project.title} handleTaskOptionSelect={handleTaskOptionSelect}/>
            );
          })}
        <AddTaskButton handleOptionSelect={handleOptionSelect}/>
      </div>
    </div>
  );
};

export default Today;
