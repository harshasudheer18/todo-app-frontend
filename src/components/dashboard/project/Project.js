import React from "react";
import AddTaskButton from "../common/AddTaskButton";
import Task from "../common/Task";
import "./Project.css";

const Project = ({ selectedProject, tasks, fetchTasks, handleOptionSelect, handleTaskOptionSelect }) => {
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
              })} fetchTasks={fetchTasks}/>
            );
          })}
        <AddTaskButton handleOptionSelect={handleOptionSelect}/>
      </div>
    </div>
  );
};

export default Project;
