import React from "react";
import Add from "../../../assets/images/icons/add.svg";
import "./Project.css";

const Project = ({ selectedProject, tasks }) => {
  const projectTasks = tasks && tasks.filter((task) => task.project.id === selectedProject.id);

  return (
    <div className="project-container">
      <div className="project-inner-container">
        <h1>{selectedProject.title}</h1>
        <p style={{ color: "#5A5858" }}>
          {selectedProject.description}
        </p>
        {projectTasks &&
          projectTasks.map((task) => {
            return (
              <div className="project-task">
                <label className="project-task-name">
                  <input
                    className="project-task-checkbox"
                    type="checkbox"
                    value="Task one"
                    checked={false}
                  />
                  <p>{task.title}</p>
                </label>
                <p style={{ color: "#5A5858", marginLeft: "30px" }}>
                  {task.description}
                </p>
                <p className="project-due-date">
                  {new Date(task.deadline).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            );
          })}
        <div className="project-add-button">
          <img src={Add} alt="add" />
          <p>Add task</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
