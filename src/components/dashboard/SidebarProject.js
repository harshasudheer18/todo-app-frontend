import React, { useState } from "react";
import EditProject from "./project/EditProject";
import DeleteProject from "./project/DeleteProject";
import ProjectIcon from "../../assets/images/icons/project.svg";
import Edit from "../../assets/images/icons/edit.svg";
import Delete from "../../assets/images/icons/delete.svg";
import "./SidebarProject.css";

const SidebarProject = ({ project, selected, handleOptionSelect, setSelectedProject, handleProjectSelect, fetchProjects }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleProjectSelection = () => {
    setSelectedProject(project);
    handleOptionSelect("project");
    handleProjectSelect(project);
  }
  return (
    <>
    <div
      key={project.id}
      className={
        selected && project.display
          ? "sidebar-project-button sidebar-button-selected"
          : "sidebar-project-button"
      }
    >
      <div
        className="sidebar-project-name"
        onClick={handleProjectSelection}
      >
        <img src={ProjectIcon} alt="project" />
        <p>{project.title}</p>
      </div>
      <div className="sidebar-project-options">
        <img src={Edit} alt="edit" onClick={() => setShowEdit(true)} />
        <img src={Delete} alt="delete" onClick={() => setShowDelete(true)} />
      </div>
    </div>
    {showEdit && <EditProject project={project} setShowEdit={setShowEdit} fetchProjects={fetchProjects}/>}
    {showDelete && <DeleteProject project={project} setShowDelete={setShowDelete} fetchProjects={fetchProjects}/>}
    </>
  );
};

export default SidebarProject;
