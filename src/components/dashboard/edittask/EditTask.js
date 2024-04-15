import React, { useState } from "react";
import {editTask} from "./api/ApiCalls";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import Project from "../../../assets/images/icons/project.svg";
import Calender from "../../../assets/images/icons/upcoming.svg";
import Flag1 from "../../../assets/images/icons/red-flag.svg";
import Flag2 from "../../../assets/images/icons/orange-flag.svg";
import Flag3 from "../../../assets/images/icons/blue-flag.svg";
import Flag4 from "../../../assets/images/icons/green-flag.svg";
import "./EditTask.css";
const EditTask = ({ projects, selectedTask, fetchTasks, handleTaskPopupClose }) => {
  const [task, setTask] = useState({
    id: selectedTask.id,
    title: selectedTask.title,
    description: selectedTask.description,
    project: selectedTask.project,
    deadline: selectedTask.deadline.substring(0,10),
    priority: selectedTask.priority,
  });
  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const handleTask = (event) => {
    setTask((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleOptionSelection = (key, project) => {
    let currentTask = { ...task };
    currentTask[key] = project;
    setTask(currentTask);
    if (key === "project") {
      handleShowProjects();
    }
    if (key === "priority") {
      handleShowPriority();
    }
  };

  const handleShowProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  const handleShowPriority = () => {
    setShowPriority((prevState) => !prevState);
  };

  const getFlag = () => {
    const priority = task.priority;
    if (priority === 1) {
      return Flag1;
    } else if (priority === 2) {
      return Flag2;
    } else if (priority === 3) {
      return Flag3;
    } else {
      return Flag4;
    }
  };

  const handleSave = async () => {
    try{
      if(task.title !== "" && task.description !== "" && task.project !== "" && task.deadline !== "" && task.priority !== ""){
        await editTask({...task, deadline: `${task["deadline"]}T17:42:13.212Z`});
        fetchTasks();
        handleTaskPopupClose();
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-inner-container">
        {/* <div className="edit-container"> */}
          {/* <div className="edit-inner-container"> */}
            <form className="edit-content-container">
              <input
                className="edit-name-input"
                type="text"
                name="title"
                placeholder="Task name"
                value={task.title}
                onChange={handleTask}
              />
              <br />
              <textarea
                className="edit-description-input"
                type="text"
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleTask}
              ></textarea>
              <br />
            </form>
            <div className="edit-options-container">
              <div className="edit-options-inner-container">
                <div>
                  <div>
                    <div
                      className={
                        showProjects
                          ? "edit-option-button edit-option-button-selected"
                          : "edit-option-button"
                      }
                    >
                      <p>Project</p>
                      <img
                        className="edit-dropdown"
                        src={Dropdown}
                        alt="dropdown"
                        onClick={handleShowProjects}
                      />
                    </div>
                    {!showProjects && task.project !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={Project}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>{task.project.title}</p>
                      </div>
                    )}
                  </div>
                  {showProjects && (
                    <div className="edit-options">
                      {projects.map((project) => {
                        return (
                          <div
                            className="edit-option"
                            key={project.id}
                            onClick={() =>
                              handleOptionSelection("project", project)
                            }
                          >
                            <img
                              src={Project}
                              alt="dropdown"
                              width="12px"
                              height="12px"
                            />
                            <p>{project.title}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div>
                    <div
                      style={{ position: "relative" }}
                      className={
                        false
                          ? "edit-option-button edit-option-button-selected"
                          : "edit-option-button"
                      }
                    >
                      <p>Due date</p>
                      <input
                        className="edit-date-picker"
                        type="date"
                        name="deadline"
                        value={task.deadline}
                        onChange={handleTask}
                      />
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                    {task.deadline !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={Calender}
                          alt="dropdown"
                          width="16px"
                          height="16px"
                        />
                        <p>
                          {new Date(task.deadline).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      className={
                        showPriority
                          ? "edit-option-button edit-option-button-selected"
                          : "edit-option-button"
                      }
                    >
                      <p>Priority</p>
                      <img
                        className="edit-dropdown"
                        src={Dropdown}
                        alt="dropdown"
                        onClick={handleShowPriority}
                      />
                    </div>
                    {!showPriority && task.priority !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={getFlag()}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority {task.priority}</p>
                      </div>
                    )}
                  </div>
                  {showPriority && (
                    <div className="edit-options">
                      <div
                        className="edit-option"
                        onClick={() => handleOptionSelection("priority", 1)}
                      >
                        <img
                          src={Flag1}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority 1</p>
                      </div>
                      <div
                        className="edit-option"
                        onClick={() => handleOptionSelection("priority", 2)}
                      >
                        <img
                          src={Flag2}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority 2</p>
                      </div>
                      <div
                        className="edit-option"
                        onClick={() => handleOptionSelection("priority", 3)}
                      >
                        <img
                          src={Flag3}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority 3</p>
                      </div>
                      <div
                        className="edit-option"
                        onClick={() => handleOptionSelection("priority", 4)}
                      >
                        <img
                          src={Flag4}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority 4</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="edit-button-container">
                  <button className="edit-button edit-button-cancel" onClick={handleTaskPopupClose}>
                    CANCEL
                  </button>
                  <button
                    className="edit-button edit-button-save"
                    onClick={handleSave}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default EditTask;
