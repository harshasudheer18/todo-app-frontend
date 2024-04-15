import React, { useState } from "react";
import {submitTask} from "./api/ApiCalls";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import Project from "../../../assets/images/icons/project.svg";
import Calender from "../../../assets/images/icons/upcoming.svg";
import Flag1 from "../../../assets/images/icons/red-flag.svg";
import Flag2 from "../../../assets/images/icons/orange-flag.svg";
import Flag3 from "../../../assets/images/icons/blue-flag.svg";
import Flag4 from "../../../assets/images/icons/green-flag.svg";
import "./AddTask.css";
const AddTask = ({ projects, fetchTasks, handleOptionSelect }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    project: "",
    deadline: "",
    priority: "",
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
        await submitTask({...task, deadline: `${task["deadline"]}T17:42:13.212Z`});
        fetchTasks();
        handleOptionSelect("today");
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="add-container">
      <div className="add-inner-container">
        <form className="add-content-container">
          <input
            className="add-name-input"
            type="text"
            name="title"
            placeholder="Task name"
            value={task.title}
            onChange={handleTask}
          />
          <br />
          <textarea
            className="add-description-input"
            type="text"
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleTask}
          >
          </textarea>
          <br />
        </form>
        <div className="add-options-container">
          <div className="add-options-inner-container">
            <div>
              <div>
                <div
                  className={
                    showProjects
                      ? "add-option-button add-option-button-selected"
                      : "add-option-button"
                  }
                >
                  <p>Project</p>
                  <img
                    className="add-dropdown"
                    src={Dropdown}
                    alt="dropdown"
                    onClick={handleShowProjects}
                  />
                </div>
                {!showProjects && task.project !== "" && (
                  <div className="selected-add-option">
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
                <div className="add-options">
                  {projects.map((project) => {
                    return (
                      <div
                        className="add-option"
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
                      ? "add-option-button add-option-button-selected"
                      : "add-option-button"
                  }
                >
                  <p>Due date</p>
                  <input
                    className="add-date-picker"
                    type="date"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleTask}
                  />
                  <img src={Dropdown} alt="dropdown" />
                </div>
                {task.deadline !== "" && (
                  <div className="selected-add-option">
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
                      ? "add-option-button add-option-button-selected"
                      : "add-option-button"
                  }
                >
                  <p>Priority</p>
                  <img
                    className="add-dropdown"
                    src={Dropdown}
                    alt="dropdown"
                    onClick={handleShowPriority}
                  />
                </div>
                {!showPriority && task.priority !== "" && (
                  <div className="selected-add-option">
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
                <div className="add-options">
                  <div
                    className="add-option"
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
                    className="add-option"
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
                    className="add-option"
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
                    className="add-option"
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
            <div className="add-button-container">
              <button
                className="add-button add-button-cancel"
                onClick={() => handleOptionSelect("today")}
              >
                CANCEL
              </button>
              <button
                className="add-button add-button-save"
                onClick={handleSave}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
