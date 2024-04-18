import React, { useState, useEffect } from "react";
import AddTask from "./task/AddTask";
import Search from "./search/Search";
import Today from "./today/Today";
import Upcoming from "./upcoming/Upcoming";
import SidebarProjects from "./SidebarProjects";
import Project from "./project/Project";
import { getProjects, getTasks } from "./api/ApiCalls";
import User from "../../assets/images/icons/user.svg";
import Logo from "../../assets/images/logo.svg";
import Add from "../../assets/images/icons/add.svg";
import SearchIcon from "../../assets/images/icons/search.svg";
import TodayIcon from "../../assets/images/icons/today.svg";
import UpcomingIcon from "../../assets/images/icons/upcoming.svg";
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

  const [projects, setProjects] = useState();
  const [tasks, setTasks] = useState();
  const [selectedProject, setSelectedProject] = useState();

  const fetchProjects = async () => {
    const response = await getProjects();
    const projects = response?.data.map((project) => {
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
    console.log(option);
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
          <SidebarProjects
            selected={seletedOption.project}
            handleOptionSelect={handleOptionSelect}
            setSelectedProject={setSelectedProject}
          />
        </div>
      </div>
      <div className="main-container">
        {seletedOption.add && (
          <AddTask
            projects={projects}
            fetchTasks={fetchTasks}
            handleOptionSelect={handleOptionSelect}
          />
        )}
        {seletedOption.search && (
          <Search handleOptionSelect={handleOptionSelect} />
        )}
        {seletedOption.today && (
          <Today
            tasks={tasks}
            fetchTasks={fetchTasks}
            handleOptionSelect={handleOptionSelect}
          />
        )}
        {seletedOption.upcoming && (
          <Upcoming
            tasks={tasks}
            fetchTasks={fetchTasks}
            handleOptionSelect={handleOptionSelect}
          />
        )}
        {seletedOption.project && (
          <Project
            selectedProject={selectedProject}
            tasks={tasks}
            fetchTasks={fetchTasks}
            handleOptionSelect={handleOptionSelect}
          />
        )}
      </div>
      <div className="user-container">
        <img src={User} alt="user" />
        <p
          style={{ marginLeft: "12px" }}
        >{`${user?.firstname} ${user?.lastname}`}</p>
      </div>
    </div>
  );
};

export default Dashboard;
