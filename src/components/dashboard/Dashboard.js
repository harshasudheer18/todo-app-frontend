import React, { useState, useEffect } from "react";
import AddTask from "./addtask/AddTask";
import EditTask from "./edittask/EditTask";
import DeleteTask from "./deleteTask/DeleteTask";
import Search from "./search/Search";
import Today from "./today/Today";
import Upcoming from "./upcoming/Upcoming";
import Project from "./project/Project";
import { getProjects, getTasks } from "./api/ApiCalls";
import AddProject from "./project/addproject/AddProject";
import DeleteProject from "./project/deleteproject/DeleteProject";
import EditProject from "./project/editproject/EditProject";
import User from "../../assets/images/icons/user.svg";
import Logo from "../../assets/images/logo.svg";
import Add from "../../assets/images/icons/add.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import TodayIcon from "../../assets/images/icons/today.svg";
import UpcomingIcon from "../../assets/images/icons/upcoming.svg";
import ProjectIcon from "../../assets/images/icons/project.svg";
import Plus from "../../assets/images/icons/plus.svg";
import Edit from "../../assets/images/icons/edit.svg";
import Delete from "../../assets/images/icons/delete.svg";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState();
  const [seletedOption, setSeletedOption] = useState({
    add: false,
    search: false,
    today: true,
    upcoming: false,
    project: false,
  });
  const [seletedProjectOption, setSeletedProjectOption] = useState({
    add: false,
    edit: false,
    delete: false,
  });
  const [selectedTaskOption, setSelectedTaskOption] = useState({
    edit: false,
    delete: false
  });

  const [projects, setProjects] = useState();
  const [tasks, setTasks] = useState();
  const [selectedProject, setSelectedProject] = useState();
  const [selectedTask, setSelectedTask] = useState();

  const fetchProjects = async () => {
    const response = await getProjects();
    const projects = response.data.map((project) => {
      return { ...project, display: false };
    });
    setProjects(projects);
  };

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response?.data);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
    fetchProjects();
    fetchTasks();
  }, []);

  const handleOptionSelect = (option) => {
    let currentOption = { ...seletedOption };
    for (const key in currentOption) {
      currentOption[key] = false;
    }
    currentOption[option] = true;
    setSeletedOption(currentOption);
  };

  const handleProjectSelect = (currentProject) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === currentProject.id) {
        return { ...project, display: true };
      }
      return { ...project, display: false };
    });
    setProjects(updatedProjects);
    setSelectedProject(currentProject);
    handleOptionSelect("project");
  };

  const handleProjectOptionSelect = (projectOption, projectDetails) => {
    let currentProjectOption = { ...seletedProjectOption };
    for (const key in currentProjectOption) {
      currentProjectOption[key] = false;
    }
    currentProjectOption[projectOption] = true;
    setSelectedProject(projectDetails);
    setSeletedProjectOption(currentProjectOption);
  };

  const handleProjectPopupClose = () => {
    let currentProjectOption = { ...seletedProjectOption };
    for (const key in currentProjectOption) {
      currentProjectOption[key] = false;
    }
    setSeletedProjectOption(currentProjectOption);
  };

  const handleTaskOptionSelect = (taskOption, taskDetails) => {
    let currentTaskOption = { ...selectedTaskOption };
    for (const key in currentTaskOption) {
      currentTaskOption[key] = false;
    }
    currentTaskOption[taskOption] = true;
    setSelectedTask(taskDetails);
    setSelectedTaskOption(currentTaskOption);
  };

  const handleTaskPopupClose = () => {
    let currentTaskOption = { ...selectedTaskOption };
    for (const key in currentTaskOption) {
      currentTaskOption[key] = false;
    }
    setSelectedTaskOption(currentTaskOption);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img className="logo-img" src={Logo} alt="logo" />
        <div className="sidebar-buttons">
          <div
            className={
              seletedOption.add
                ? "sidebar-button sidebar-button-selected"
                : "sidebar-button"
            }
            onClick={() => handleOptionSelect("add")}
          >
            <img src={Add} alt="add" />
            <p>Add task</p>
          </div>
          <div
            className={
              seletedOption.search
                ? "sidebar-button sidebar-button-selected"
                : "sidebar-button"
            }
            onClick={() => handleOptionSelect("search")}
          >
            <img src={SearchIcon} alt="search" />
            <p>Search</p>
          </div>
          <div
            className={
              seletedOption.today
                ? "sidebar-button sidebar-button-selected"
                : "sidebar-button"
            }
            onClick={() => handleOptionSelect("today")}
          >
            <img src={TodayIcon} alt="today" />
            <p>Today</p>
          </div>
          <div
            className={
              seletedOption.upcoming
                ? "sidebar-button sidebar-button-selected"
                : "sidebar-button"
            }
            onClick={() => handleOptionSelect("upcoming")}
          >
            <img src={UpcomingIcon} alt="upcoming" />
            <p>Upcoming</p>
          </div>
          <div className="projects">
            <h2>My Projects</h2>
            <img
              className="plus"
              src={Plus}
              alt="plus"
              onClick={() => handleProjectOptionSelect("add", "")}
            />
          </div>
          {projects &&
            projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className={
                    seletedOption.project && project.display
                      ? "sidebar-project-button sidebar-button-selected"
                      : "sidebar-project-button"
                  }
                >
                  <div
                    className="sidebar-project-name"
                    onClick={() => handleProjectSelect(project)}
                  >
                    <img src={ProjectIcon} alt="project" />
                    <p>{project.title}</p>
                  </div>
                  <div className="sidebar-project-options">
                    <img
                      src={Edit}
                      alt="edit"
                      onClick={() => handleProjectOptionSelect("edit", project)}
                    />
                    <img
                      src={Delete}
                      alt="delete"
                      onClick={() =>
                        handleProjectOptionSelect("delete", project)
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="main-container">
        {seletedOption.add && (
          <AddTask projects={projects} fetchTasks={fetchTasks} handleOptionSelect={handleOptionSelect} />
        )}
        {seletedOption.search && <Search handleOptionSelect={handleOptionSelect}/>}
        {seletedOption.today && (
          <Today tasks={tasks} handleOptionSelect={handleOptionSelect} handleTaskOptionSelect={handleTaskOptionSelect}/>
        )}
        {seletedOption.upcoming && <Upcoming tasks={tasks} handleOptionSelect={handleOptionSelect}/>}
        {seletedOption.project && <Project selectedProject={selectedProject} tasks={tasks} handleOptionSelect={handleOptionSelect} handleTaskOptionSelect={handleTaskOptionSelect}/>}
      </div>
      <div className="user-container">
        <img src={User} alt="user" />
        <p
          style={{ marginLeft: "12px" }}
        >{`${user?.firstname} ${user?.lastname}`}</p>
      </div>
      {seletedProjectOption.add && (
        <AddProject
          handleProjectPopupClose={handleProjectPopupClose}
          fetchProjects={fetchProjects}
        />
      )}
      {seletedProjectOption.delete && (
        <DeleteProject
          selectedProject={selectedProject}
          handleProjectPopupClose={handleProjectPopupClose}
          fetchProjects={fetchProjects}
        />
      )}
      {seletedProjectOption.edit && (
        <EditProject
          selectedProject={selectedProject}
          handleProjectPopupClose={handleProjectPopupClose}
          fetchProjects={fetchProjects}
        />
      )}
      {selectedTaskOption.edit && <EditTask projects={projects} selectedTask={selectedTask} fetchTasks={fetchTasks}  handleTaskPopupClose={handleTaskPopupClose}/>}
      {selectedTaskOption.delete && <DeleteTask selectedTask={selectedTask} fetchTasks={fetchTasks} handleTaskPopupClose={handleTaskPopupClose}/>}
    </div>
  );
};

export default Dashboard;
