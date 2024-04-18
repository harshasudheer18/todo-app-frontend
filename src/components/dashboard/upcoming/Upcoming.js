import React, { useState } from "react";
import UpcomingTask from "./UpcomingTask";
import AddTaskButton from "../common/AddTaskButton";
import Dropdown from "../../../assets/images/icons/dropdown-brown.svg";
import "./Upcoming.css";

const Upcoming = ({ tasks, fetchTasks, handleOptionSelect, handleTaskOptionSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateCompare = (dateString, offset) => {
    const date = new Date(dateString);
    let checkDate = new Date(currentDate);
    checkDate.setDate(checkDate.getDate() + offset);
    return (
      date.getFullYear() === checkDate.getFullYear() &&
      date.getMonth() === checkDate.getMonth() &&
      date.getDate() === checkDate.getDate()
    );
  };
  const tasks1 = tasks && tasks.filter((task) => dateCompare(task.deadline, 0));
  const tasks2 = tasks && tasks.filter((task) => dateCompare(task.deadline, 1));
  const tasks3 = tasks && tasks.filter((task) => dateCompare(task.deadline, 2));
  const getDayAndDayOfWeek = (offset) => {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + offset);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();

    return `${dayOfMonth} . ${dayOfWeek}`;
  };

  return (
    <div className="upcoming-container">
      <div className="upcoming-inner-container">
        <h1>Upcoming</h1>
        <div className="upcoming-date-picker-container">
          <h4>March 2023</h4>
          <input
            className="upcoming-date-picker"
            type="date"
            name="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
          <img src={Dropdown} alt="dropdown" />
        </div>
        <div className="upcoming-tasks">
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                {getDayAndDayOfWeek(0)}
              </p>
              {tasks1 &&
                tasks1.map((task) => {
                  return (
                    <UpcomingTask task={task} fetchTasks={fetchTasks}/>
                  );
                })}
            </div>
            <AddTaskButton handleOptionSelect={handleOptionSelect} />
          </div>
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                {getDayAndDayOfWeek(1)}
              </p>
              {tasks2 &&
                tasks2.map((task) => {
                  return (
                    <UpcomingTask task={task} fetchTasks={fetchTasks}/>
                  );
                })}
              <AddTaskButton handleOptionSelect={handleOptionSelect} />
            </div>
          </div>
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
                {getDayAndDayOfWeek(2)}
              </p>
              {tasks3 &&
                tasks3.map((task) => {
                  return (
                    <UpcomingTask task={task} fetchTasks={fetchTasks}/>
                  );
                })}
              <AddTaskButton handleOptionSelect={handleOptionSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
