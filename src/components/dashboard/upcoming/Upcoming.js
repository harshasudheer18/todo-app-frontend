import React from "react";
import Dropdown from "../../../assets/images/icons/dropdown-brown.svg";
import Add from "../../../assets/images/icons/add.svg";
import "./Upcoming.css";

const Upcoming = () => {
  return (
    <div className="upcoming-container">
      <div className="upcoming-inner-container">
        <h1>Upcoming</h1>
        <div className="date-picker">
          <h4>March 2023</h4>
          <img src={Dropdown} alt="dropdown" />
        </div>
        <div className="upcoming-tasks">
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                19 . Tuesday
              </p>
              <div className="upcoming-task">
                <label className="upcoming-task-name">
                  <input
                    className="upcoming-task-checkbox"
                    type="checkbox"
                    value="Task one"
                    checked={false}
                  />
                  Task one
                </label>
                <p
                  style={{ color: "#5A5858", marginLeft: "30px", width: "60%" }}
                >
                  This is the description for task one.
                </p>
                <p className="upcomg-project-name">Inbox</p>
              </div>
            </div>
            <div className="upcoming-add-button">
              <img src={Add} alt="add" />
              <p>Add task</p>
            </div>
          </div>
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                20 . Wednesday
              </p>
              <div className="upcoming-task">
                <label className="upcoming-task-name">
                  <input
                    className="upcoming-task-checkbox"
                    type="checkbox"
                    value="Task one"
                    checked={false}
                  />
                  Task two
                </label>
                <p
                  style={{ color: "#5A5858", marginLeft: "30px", width: "60%" }}
                >
                  This is the description for task two.
                </p>
                <p className="upcomg-project-name">Inbox</p>
              </div>
              <div className="upcoming-add-button">
                <img src={Add} alt="add" />
                <p>Add task</p>
              </div>
            </div>
          </div>
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                21 . Thursday
              </p>
              <div className="upcoming-task">
                <label className="upcoming-task-name">
                  <input
                    className="upcoming-task-checkbox"
                    type="checkbox"
                    value="Task one"
                    checked={false}
                  />
                  Task three
                </label>
                <p
                  style={{ color: "#5A5858", marginLeft: "30px", width: "60%" }}
                >
                  This is the description for task three.
                </p>
                <p className="upcomg-project-name">Inbox</p>
              </div>
              <div className="upcoming-add-button">
                <img src={Add} alt="add" />
                <p>Add task</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
