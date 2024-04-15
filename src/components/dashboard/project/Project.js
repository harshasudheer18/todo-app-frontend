import React from "react";
import Task from "../common/Task";
import Add from "../../../assets/images/icons/add.svg";
import "./Project.css";

const Project = ({ selectedProject, tasks, handleOptionSelect, handleTaskOptionSelect }) => {
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
              <Task key={task.id} task={task} info={new Date(task.deadline).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })} handleTaskOptionSelect={handleTaskOptionSelect}/>
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
