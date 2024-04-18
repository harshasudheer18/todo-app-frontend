import React, { useState } from "react";
import EditTask from "../task/EditTask";
import DeleteTask from "../task/DeleteTask";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import "./UpcomingTask.css";

const UpcomingTask = ({ task, fetchTasks }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <>
    <div className="upcoming-task" key={task.id}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="upcoming-task-content-container"
          onClick={() => setShowEdit(true)}
        >
          <label className="upcoming-task-name">
            <input
              className="upcoming-task-checkbox"
              type="checkbox"
              value="Task one"
              checked={false}
              readOnly={true}
            />
            <p>{task.title}</p>
          </label>
          <p
            style={{
              color: "#5A5858",
              marginLeft: "30px",
              width: "60%",
            }}
          >
            {task.description}
          </p>
        </div>
        <div className="upcoming-task-button-container">
          <img
            style={{ marginRight: "12px" }}
            src={Edit}
            alt="edit"
            onClick={() => setShowEdit(true)}
          />
          <img
            src={Delete}
            alt="delete"
            onClick={() => setShowDelete(true)}
          />
        </div>
      </div>
      <p className="upcomg-project-name">{task.project.title}</p>
    </div>
    {showEdit && <EditTask task={task} setShowEdit={setShowEdit} fetchTasks={fetchTasks}/>}
    {showDelete && <DeleteTask task={task} setShowDelete={setShowDelete} fetchTasks={fetchTasks}/>}
    </>
  );
};

export default UpcomingTask;
