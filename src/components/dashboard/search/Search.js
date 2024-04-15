import React from "react";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import SearchIcon from "../../../assets/images/icons/search-black.svg";
import Clock from "../../../assets/images/icons/clock.svg";
import Home from "../../../assets/images/icons/home.svg";
import Today from "../../../assets/images/icons/today-grey.svg";
import Upcoming from "../../../assets/images/icons/upcoming-grey.svg";
import "./Search.css";

const Search = ( {handleOptionSelect} ) => {
  return (
    <div className="search-container">
      <div className="search-inner-container">
        <div className="search-bar">
          <button className="filter-button">
            <p>Filter by</p>
            <img className="search-dropdown" src={Dropdown} alt="dropdown" />
          </button>
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search"
          />
          <img
            src={SearchIcon}
            alt="dropdown"
            style={{ padding: "12px 16px 12px 12px" }}
          />
        </div>
        <div className="links-container">
          <p style={{color: "#767676", paddingLeft: "16px", paddingTop: "8px"}}>Recent searches</p>
          <div className="links-item">
            <img src={Clock} alt="clock" />
            <p>Inbox</p>
          </div>
          <div className="links-item">
            <img src={Clock} alt="clock" />
            <p>Work</p>
          </div>
        </div>
        <div className="links-container">
          <p style={{color: "#767676", paddingLeft: "16px", paddingTop: "8px"}}>Navigation</p>
          <div className="links-item" onClick={() => handleOptionSelect("today")}>
            <img src={Home} alt="home" />
            <p>Home</p>
          </div>
          <div className="links-item" onClick={() => handleOptionSelect("today")}>
            <img src={Today} alt="today" />
            <p>Today</p>
          </div>
          <div className="links-item" onClick={() => handleOptionSelect("upcoming")}>
            <img src={Upcoming} alt="upcoming" />
            <p>Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
