import React from "react";
import { deleteTask } from "./api/ApiCalls";
import "./DeleteTask.css";

const DeleteTask = ({task, setShowDelete, fetchTasks}) => {
    const handleDelete = async() => {
      try {
        await deleteTask(task.id);
        fetchTasks();
        setShowDelete(false);
      }
      catch(err){
        console.log(err);
      }
    }
    return(
        <div className="delete-task-container">
          <div className="delete-task-inner-container">
            <p className="delete-task-heading">Delete Task?</p>
            <p>This will permanently delete "{task.title}". Are you sure?</p>
            <div className="delete-task-button-container">
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="delete-task-button delete-task-button-cancel"
                  onClick={() => setShowDelete(false)}
                >
                  CANCEL
                </button>
                <button className="delete-task-button delete-task-button-save" onClick={handleDelete}>
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default DeleteTask;