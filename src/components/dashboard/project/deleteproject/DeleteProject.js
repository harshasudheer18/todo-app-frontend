import React from "react";
import { deleteProject } from "../api/ApiCalls";
import "./DeleteProject.css";

const DeleteProject = ({
  selectedProject,
  handleProjectPopupClose,
  fetchProjects,
}) => {
  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      await fetchProjects();
      handleProjectPopupClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="delete-project-container">
      <div className="delete-project-inner-container">
        <p className="delete-project-heading">Delete Project?</p>
        <p>
          This will permanently delete "{selectedProject.title}" and all its
          tasks. Are you sure?
        </p>
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
              onClick={handleProjectPopupClose}
            >
              CANCEL
            </button>
            <button
              className="delete-project-button delete-project-button-save"
              onClick={() => handleDeleteProject(selectedProject.id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
