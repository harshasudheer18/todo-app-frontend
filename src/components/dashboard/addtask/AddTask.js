import React from "react";
import Dropdown from "../../../assets/images/icons/dropdown.svg";
import "./AddTask.css";
const AddTask = ({handleOptionSelect}) => {
  return (
    <div className="add-container">
      <div className="add-inner-container">
        <div className="add-content-container">
          <h1
            style={{
              color: "#5A5858",
              paddingTop: "24px",
              paddingLeft: "32px",
            }}
          >
            Task name
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
            Description
          </p>
        </div>
        <div className="add-options-container">
          <div className="add-options-inner-container">
            <div>
              <div className="add-option-button">
                <p>Project</p>
                <img src={Dropdown} alt="dropdown" />
              </div>
              <div className="add-option-button">
                <p>Due date</p>
                <img src={Dropdown} alt="dropdown" />
              </div>
              <div className="add-option-button">
                <p>Priority</p>
                <img src={Dropdown} alt="dropdown" />
              </div>
            </div>
            <div className="add-button-container">
              <button className="add-button add-button-cancel" onClick={ () => handleOptionSelect("today")}>CANCEL</button>
              <button className="add-button add-button-save">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
