import React from "react";
import Add from "../../../assets/images/icons/add.svg";
import "./Today.css";

const Today = ({ tasks, handleOptionSelect }) => {
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
              <div
                className="today-task"
                key={task.id}
                onClick={() => handleOptionSelect("edit")}
              >
                <label className="today-task-name">
                  <input
                    className="today-task-checkbox"
                    type="checkbox"
                    value="Task one"
                    checked={false}
                    readOnly={true}
                  />
                  <p>{task.title}</p>
                </label>
                <p style={{ color: "#5A5858", marginLeft: "30px" }}>
                  {task.description}
                </p>
                <p className="today-project-name">{task.project.title}</p>
              </div>
            );
          })}
        <div className="today-add-button">
          <img src={Add} alt="add" />
          <p>Add task</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
