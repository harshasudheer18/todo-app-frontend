import React, { useState } from "react";
import EditTask from "../task/EditTask";
import DeleteTask from "../task/DeleteTask";
import { submitTaskDone } from "./api/ApiCalls";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import "./Task.css";

const Task = ({ task, info, fetchTasks }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const markTaskAsDone = async () => {
    try{
      await submitTaskDone({...task, status: !task.status});
      await fetchTasks();
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="task" key={task.id}>
        <div
          className="task-content-container"
        >
          <label className="task-name">
            <input
              className="task-checkbox"
              type="checkbox"
              value="Task one"
              checked={task.status}
              onChange={markTaskAsDone}
            />
            <p className="task-title">{task.title}</p>
          </label>
          <p style={{ color: "#5A5858", marginLeft: "32px", fontSize: "18px"}}>
            {task.description}
          </p>
        </div>
        <div className="task-button-container">
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
        <p className="info">{info}</p>
      </div>
      {showEdit && <EditTask task={task} setShowEdit={setShowEdit} fetchTasks={fetchTasks} />}
      {showDelete && <DeleteTask task={task} setShowDelete={setShowDelete} fetchTasks={fetchTasks}/>}
    </>
  );
};

export default Task;
