import React from "react";
import { deleteTask } from "./api/ApiCalls";

const DeleteTask = ({selectedTask, fetchTasks, handleTaskPopupClose}) => {
    const handleDelete = async() => {
      try {
        await deleteTask(selectedTask.id);
        fetchTasks();
        handleTaskPopupClose();
      }
      catch(err){
        console.log(err);
      }
    }
    return(
        <div className="delete-project-container">
          <div className="delete-project-inner-container">
            <p className="delete-project-heading">Delete Task?</p>
            <p>This will permanently delete "{selectedTask.title}". Are you sure?</p>
            <div className="delete-project-button-container">
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="delete-project-button delete-project-button-cancel"
                  onClick={handleTaskPopupClose}
                >
                  CANCEL
                </button>
                <button className="delete-project-button delete-project-button-save" onClick={handleDelete}>
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default DeleteTask;