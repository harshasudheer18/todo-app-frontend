import React from "react";
import Add from "../../../assets/images/icons/add.svg";
import "./Today.css";

const Today = () => {
  return (
    <div className="today-container">
      <div className="today-inner-container">
        <h1>Today</h1>
        <div className="today-task">
          <label className="today-task-name">
            <input
              className="today-task-checkbox"
              type="checkbox"
              value="Task one"
              checked={false}
            />
            Task one
          </label>
          <p style={{ color: "#5A5858", marginLeft: "30px" }}>
            This is the description for task one.
          </p>
          <p className="today-project-name">Inbox</p>
        </div>
        <div className="today-task">
          <label className="today-task-name">
            <input
              className="today-task-checkbox"
              type="checkbox"
              value="Task one"
              checked={false}
            />
            Task two
          </label>
          <p style={{ color: "#5A5858", marginLeft: "30px" }}>
            This is the description for task two.
          </p>
          <p className="today-project-name">Inbox</p>
        </div>
        <div className="today-add-button">
          <img src={Add} alt="add" />
          <p>Add task</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
