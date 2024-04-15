import React from "react";
import { useForm } from "react-hook-form";
import { editProject } from "../api/ApiCalls";
import "./EditProject.css";

const EditProject = ({
  selectedProject,
  handleProjectPopupClose,
  fetchProjects,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: selectedProject.title,
      description: selectedProject.description,
    },
  });

  const onSubmit = async (data) => {
    try {
      await editProject(selectedProject.id, data);
      fetchProjects();
      handleProjectPopupClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit-project-container">
      <div className="edit-project-inner-container">
        <p className="edit-project-heading">Edit Project</p>
        <form className="edit-project-form" onSubmit={handleSubmit(onSubmit)}>
          <p style={{ marginTop: "8px" }}>Name</p>
          <input
            className="edit-project-input"
            type="text"
            name="name"
            placeholder=""
            {...register("name", {
              required: { value: true, message: "Project name is required." },
            })}
          />
          <br />
          {errors.name && (
            <p className="edit-project-error-message">
              &#9888; {errors.name.message}
            </p>
          )}
          <p style={{ marginTop: "8px" }}>Description</p>
          <input
            className="edit-project-input"
            type="text"
            name="description"
            placeholder=""
            {...register("description", {
              required: {
                value: true,
                message: "Project description is required.",
              },
            })}
          />
          <br />
          {errors.description && (
            <p className="edit-project-error-message">
              &#9888; {errors.description.message}
            </p>
          )}
          <div className="edit-project-button-container">
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                className="edit-project-button edit-project-button-cancel"
                onClick={handleProjectPopupClose}
              >
                CANCEL
              </button>
              <input
                className="edit-project-button edit-project-button-save"
                type="submit"
                value="SAVE"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
