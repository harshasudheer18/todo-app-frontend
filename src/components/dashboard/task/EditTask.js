import React, { useState, useEffect } from "react";
import {getProjects, submitEditTask} from "./api/ApiCalls";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import Project from "../../../assets/images/icons/project.svg";
import Calender from "../../../assets/images/icons/upcoming.svg";
import Flag1 from "../../../assets/images/icons/red-flag.svg";
import Flag2 from "../../../assets/images/icons/orange-flag.svg";
import Flag3 from "../../../assets/images/icons/blue-flag.svg";
import Flag4 from "../../../assets/images/icons/green-flag.svg";
import "./EditTask.css";
const EditTask = ({ task, setShowEdit, fetchTasks }) => {
  const [editTask, setEditTask] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    project: task.project,
    deadline: task.deadline.substring(0,10),
    priority: task.priority
  });
  const [projects, setProjects] = useState();
  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response?.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleTask = (event) => {
    setEditTask((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleShowProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  const handleShowPriority = () => {
    setShowPriority((prevState) => !prevState);
  };

  const handleOptionSelection = (key, project) => {
    let currentTask = { ...editTask };
    currentTask[key] = project;
    setEditTask(currentTask);
    if (key === "project") {
      handleShowProjects();
    }
    if (key === "priority") {
      handleShowPriority();
    }
  };

  const getFlag = () => {
    const priority = editTask.priority;
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
      if(editTask.title !== "" && editTask.description !== "" && editTask.project !== "" && editTask.deadline !== "" && editTask.priority !== ""){
        await submitEditTask({...editTask, deadline: `${editTask["deadline"]}T17:42:13.212Z`});
        fetchTasks();
        setShowEdit(false);
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-inner-container">
            <form className="edit-content-container">
              <input
                className="edit-name-input"
                type="text"
                name="title"
                placeholder="Task name"
                value={editTask.title}
                onChange={handleTask}
              />
              <br />
              <textarea
                className="edit-description-input"
                type="text"
                name="description"
                placeholder="Description"
                value={editTask.description}
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
                    {!showProjects && editTask.project !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={Project}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>{editTask.project.title}</p>
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
                        value={editTask.deadline}
                        onChange={handleTask}
                      />
                      <img src={Dropdown} alt="dropdown" />
                    </div>
                    {editTask.deadline !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={Calender}
                          alt="dropdown"
                          width="16px"
                          height="16px"
                        />
                        <p>
                          {new Date(editTask.deadline).toLocaleDateString("en-US", {
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
                    {!showPriority && editTask.priority !== "" && (
                      <div className="selected-edit-option">
                        <img
                          src={getFlag()}
                          alt="dropdown"
                          width="12px"
                          height="12px"
                        />
                        <p>Priority {editTask.priority}</p>
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
                  <button className="edit-button edit-button-cancel" onClick={() => setShowEdit(false)}>
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
      </div>
    </div>
  );
};

export default EditTask;
