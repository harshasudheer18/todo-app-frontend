import React from "react";
import Add from "../../../assets/images/icons/add.svg";
import "./Project.css";

const Today = () => {
  return (
    <div className="project-container">
      <div className="project-inner-container">
        <h1>Inbox</h1>
        <p style={{color: "#5A5858"}}>This is the description for project work.</p>
        <div className="project-task">
          <label className="project-task-name">
            <input
              className="project-task-checkbox"
              type="checkbox"
              value="Task one"
              checked={false}
            />
            Task one
          </label>
          <p style={{color: "#5A5858", marginLeft: "30px"}}>This is the description for task one.</p>
          <p className="project-due-date">20 March 2024</p>
        </div>
        <div className="project-task">
          <label className="project-task-name">
            <input
              className="project-task-checkbox"
              type="checkbox"
              value="Task one"
              checked={false}
            />
            Task two
          </label>
          <p style={{color: "#5A5858", marginLeft: "30px"}}>This is the description for task two.</p>
          <p className="project-due-date">20 March 2024</p>
        </div>
        <div className="project-add-button">
            <img src={Add} alt="add" />
            <p>Add task</p>
          </div>
      </div>
    </div>
  );
};

export default Today;
