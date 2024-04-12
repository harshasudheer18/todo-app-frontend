import React from "react";
import { useForm } from "react-hook-form";
import { addProject } from "./api/ApiCalls";
import "./AddProject.css";

const AddProject = ({ setIsAddProject }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{
        await addProject(data);
        setIsAddProject(false);
    }
    catch(err){
        console.log(err);
    }
  };

  return (
    <div className="add-project-container">
      <div className="add-project-inner-container">
        <p className="add-project-heading">Add Project</p>
        <form className="add-project-form" onSubmit={handleSubmit(onSubmit)}>
          <p style={{ marginTop: "8px" }}>Name</p>
          <input
            className="add-project-input"
            type="text"
            name="name"
            placeholder=""
            {...register("name", {
              required: { value: true, message: "Project name is required." },
            })}
          />
          <br />
          {errors.name && (
            <p className="add-project-error-message">
              &#9888; {errors.name.message}
            </p>
          )}
          <p style={{ marginTop: "8px" }}>Description</p>
          <input
            className="add-project-input"
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
            <p className="add-project-error-message">
              &#9888; {errors.description.message}
            </p>
          )}
          <div className="add-project-button-container">
            <div
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                className="add-project-button add-project-button-cancel"
                onClick={() => setIsAddProject(false)}
              >
                CANCEL
              </button>
              <input
                className="add-project-button add-project-button-save"
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

export default AddProject;
