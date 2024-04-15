import React from "react";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import "./Task.css";

const Task = ({ task, info, handleTaskOptionSelect }) => {
  return (
    <div className="task" key={task.id}>
      <div
        className="task-content-container"
        onClick={() => handleTaskOptionSelect("edit", task)}
      >
        <label className="task-name">
          <input
            className="task-checkbox"
            type="checkbox"
            value="Task one"
            checked={false}
            readOnly={true}
          />
          <p className="task-title">{task.title}</p>
        </label>
        <p style={{ color: "#5A5858", marginLeft: "30px" }}>
          {task.description}
        </p>
      </div>
      <div className="task-button-container">
        <img
          style={{ marginRight: "12px" }}
          src={Edit}
          alt="edit"
          onClick={() => handleTaskOptionSelect("edit", task)}
        />
        <img src={Delete} alt="delete"
          onClick={() => handleTaskOptionSelect("delete", task)}
        />
      </div>
      <p className="info">{info}</p>
    </div>
  );
};

export default Task;
