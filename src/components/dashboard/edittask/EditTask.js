import React from "react";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import Project from "../../../assets/images/icons/project.svg";
import Calender from "../../../assets/images/icons/upcoming.svg";
import Flag from "../../../assets/images/icons/red-flag.svg";
import "./EditTask.css";
const EditTask = () => {
  return (
    <div className="edit-container">
      <div className="edit-inner-container">
        <div className="edit-content-container">
          <h1
            style={{
              paddingTop: "24px",
              paddingLeft: "32px",
            }}
          >
            Task one
          </h1>
          <p
            style={{
              color: "#5A5858",
              fontWeight: "400px",
              fontSize: "20px",
              marginTop: "8px",
              paddingLeft: "32px",
            }}
          >
            This is the description for task one.
          </p>
        </div>
        <div className="edit-options-container">
          <div className="edit-options-inner-container">
            <div>
              <p style={{ marginTop: "12px" }}>Project</p>
              <div className="edit-option-button">
                <div className="edit-option-button-content">
                  <img
                    src={Project}
                    alt="dropdown"
                    width="12px"
                    height="12px"
                  />
                  <p>Inbox</p>
                </div>
                <img className="edit-dropdown" src={Dropdown} alt="dropdown" />
              </div>
              <p style={{ marginTop: "12px" }}>Due date</p>
              <div className="edit-option-button">
                <div className="edit-option-button-content">
                  <img
                    src={Calender}
                    alt="dropdown"
                    width="16px"
                    height="16px"
                  />
                  <p>22 March 2024</p>
                </div>
                <img className="edit-dropdown" src={Dropdown} alt="dropdown" />
              </div>
              <p style={{ marginTop: "12px" }}>Priority</p>
              <div className="edit-option-button">
                <div className="edit-option-button-content">
                  <img
                    src={Flag}
                    alt="dropdown"
                    width="12px"
                    height="12px"
                  />
                  <p>Priority 1</p>
                </div>
                <img className="edit-dropdown" src={Dropdown} alt="dropdown" />
              </div>
            </div>
            <div className="edit-button-container">
              <button className="edit-button edit-button-cancel">CANCEL</button>
              <button className="edit-button edit-button-save">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
