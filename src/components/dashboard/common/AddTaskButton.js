import React from "react";
import Add from "../../../assets/images/icons/add.svg";
import "./AddTaskButton.css";

const AddTaskButton = ({handleOptionSelect}) => {
  return (
    <div className="add-task-button" onClick={() => handleOptionSelect("add")}>
      <img src={Add} alt="add" />
      <p>Add task</p>
    </div>
  );
};

export default AddTaskButton;
