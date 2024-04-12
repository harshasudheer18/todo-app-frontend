import React, { useState, useEffect } from "react";
import AddTask from "./addtask/AddTask";
import EditTask from "./edittask/EditTask";
import Search from "./search/Search";
import Today from "./today/Today";
import Upcoming from "./upcoming/Upcoming";
import Project from "./project/Project";
import { getProjects } from "./api/ApiCalls";
import AddProject from "./addproject/AddProject";
import User from "../../assets/images/icons/user.svg";
import Logo from "../../assets/images/logo.svg";
import Add from "../../assets/images/icons/add.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import TodayIcon from "../../assets/images/icons/today.svg";
import UpcomingIcon from "../../assets/images/icons/upcoming.svg";
import ProjectIcon from "../../assets/images/icons/project.svg";
import Plus from "../../assets/images/icons/plus.svg";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState();
  const [seletedOption, setSeletedOption] = useState({
    add: false,
    edit: false,
    search: false,
    today: true,
    upcoming: false,
    project: false,
  });
  const [isAddProject, setIsAddProject] = useState(false);
  const [projects, setProjects] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));

    const fetchProjects = async () => {
      const response = await getProjects();
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  const handleOptionSelect = (option) => {
    let currentOption = { ...seletedOption };
    for (const key in currentOption) {
      currentOption[key] = false;
    }
    currentOption[option] = true;
    setSeletedOption(currentOption);
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
              onClick={() => setIsAddProject(true)}
            />
          </div>
          {projects &&
            projects.map((project) => {
              return (
                <div
                key={project.id}
                  className={
                    seletedOption.project
                      ? "sidebar-button sidebar-button-selected"
                      : "sidebar-button"
                  }
                  onClick={() => handleOptionSelect("project")}
                >
                  <img src={ProjectIcon} alt="project" />
                  <p>{project.title}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="main-container">
        {seletedOption.add && (
          <AddTask handleOptionSelect={handleOptionSelect} />
        )}
        {seletedOption.edit && <EditTask />}
        {seletedOption.search && <Search />}
        {seletedOption.today && (
          <Today handleOptionSelect={handleOptionSelect} />
        )}
        {seletedOption.upcoming && <Upcoming />}
        {seletedOption.project && <Project />}
      </div>
      <div className="user-container">
        <img src={User} alt="user" />
        <p
          style={{ marginLeft: "12px" }}
        >{`${user?.firstname} ${user?.lastname}`}</p>
      </div>
      {isAddProject && <AddProject setIsAddProject={setIsAddProject} />}
    </div>
  );
};

export default Dashboard;
