import React, {useState} from "react";
import AddTask from "./addtask/AddTask";
import User from "../../assets/images/icons/user.svg";
import Logo from "../../assets/images/logo.svg";
import Add from "../../assets/images/icons/add.svg";
import Search from "../../assets/images/icons/search.svg";
import Today from "../../assets/images/icons/today.svg";
import Upcoming from "../../assets/images/icons/upcoming.svg";
import Project from "../../assets/images/icons/project.svg";
import "./Dashboard.css";

const Dashboard = () => {
  const [isAddTask, setIsAddTask] = useState(false);
  const handleAddTask = () => {
    setIsAddTask(true);
  }
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img className="logo-img" src={Logo} alt="logo" />
        <div className="sidebar-buttons">
          <div className={isAddTask ? "sidebar-button sidebar-button-selected" : "sidebar-button"} onClick={handleAddTask}>
            <img src={Add} alt="add" />
            <p>Add task</p>
          </div>
          <div className="sidebar-button">
            <img src={Search} alt="search" />
            <p>Search</p>
          </div>
          <div className="sidebar-button">
            <img src={Today} alt="today" />
            <p>Today</p>
          </div>
          <div className="sidebar-button">
            <img src={Upcoming} alt="upcoming" />
            <p>Upcoming</p>
          </div>
          <h2 style={{marginTop: "32px"}}>My Projects</h2>
          <div className="sidebar-button">
            <img src={Project} alt="project" />
            <p>Inbox</p>
          </div>
        </div>
      </div>
      <div className="main-container">
        {isAddTask && <AddTask/>}
      </div>
      <div className="user-container">
        <img src={User} alt="user" />
        <p style={{marginLeft: "12px"}}>Harsha Sudheer</p>
      </div>
    </div>
  );
};

export default Dashboard;
