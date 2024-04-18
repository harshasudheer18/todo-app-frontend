import React, {useState, useEffect} from "react";
import AddProject from "./project/AddProject";
import SidebarProject from "./SidebarProject";
import { getProjects } from "./api/ApiCalls";
import Plus from "../../assets/images/icons/plus.svg";
import "./SidebarProjects.css";

const SidebarProjects = ({selected, handleOptionSelect, setSelectedProject}) => {
  const [projects, setProjects] = useState();
  const [showAdd, setShowAdd] = useState(false);

  const fetchProjects = async () => {
    const response = await getProjects();
    const projects = response?.data.map((project) => {
      return { ...project, display: false };
    });
    setProjects(projects);
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  const handleProjectSelect = (currentProject) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === currentProject.id) {
        return { ...project, display: true };
      }
      return { ...project, display: false };
    });
    setProjects(updatedProjects);
  };
  return (
    <>
      <div className="projects">
        <h2>My Projects</h2>
        <img
          className="plus"
          src={Plus}
          alt="plus"
          onClick={() => setShowAdd(true)}
        />
      </div>
      {projects &&
        projects.map((project) => {
          return (
            <SidebarProject project={project} selected={selected} handleOptionSelect={handleOptionSelect} setSelectedProject = {setSelectedProject} handleProjectSelect={handleProjectSelect} fetchProjects={fetchProjects}/>
          );
        })}
        {showAdd && <AddProject setShowAdd={setShowAdd} fetchProjects={fetchProjects}/>}
    </>
  );
};

export default SidebarProjects;
