import React, { useState } from "react";
import AddTaskButton from "../common/AddTaskButton";
import Dropdown from "../../../assets/images/icons/dropdown-brown.svg";
import "./Upcoming.css";

const Upcoming = ({ tasks, handleOptionSelect }) => {
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
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();

    return(`${dayOfMonth} . ${dayOfWeek}`);
}

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
                    <div className="upcoming-task" key={task.id}>
                      <label className="upcoming-task-name">
                        <input
                          className="upcoming-task-checkbox"
                          type="checkbox"
                          value="Task one"
                          checked={false}
                          readOnly={true}
                        />
                        <p>{task.title}</p>
                      </label>
                      <p
                        style={{
                          color: "#5A5858",
                          marginLeft: "30px",
                          width: "60%",
                        }}
                      >
                        {task.description}
                      </p>
                      <p className="upcomg-project-name">{task.project.title}</p>
                    </div>
                  );
                })}
            </div>
            <AddTaskButton handleOptionSelect={handleOptionSelect}/>
          </div>
          <div className="upcoming-task-container">
            <div>
              <p style={{ fontSize: "20px", fontWeight: "900" }}>
              {getDayAndDayOfWeek(1)}
              </p>
              {tasks2 &&
                tasks2.map((task) => {
                  return (
                    <div className="upcoming-task" key={task.id}>
                      <label className="upcoming-task-name">
                        <input
                          className="upcoming-task-checkbox"
                          type="checkbox"
                          value="Task one"
                          checked={false}
                          readOnly={true}
                        />
                        <p>{task.title}</p>
                      </label>
                      <p
                        style={{
                          color: "#5A5858",
                          marginLeft: "30px",
                          width: "60%",
                        }}
                      >
                        {task.description}
                      </p>
                      <p className="upcomg-project-name">{task.project.title}</p>
                    </div>
                  );
                })}
              <AddTaskButton/>
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
                    <div className="upcoming-task" key={task.id}>
                      <label className="upcoming-task-name">
                        <input
                          className="upcoming-task-checkbox"
                          type="checkbox"
                          value="Task one"
                          checked={false}
                          readOnly={true}
                        />
                        <p>{task.title}</p>
                      </label>
                      <p
                        style={{
                          color: "#5A5858",
                          marginLeft: "30px",
                          width: "60%",
                        }}
                      >
                        {task.description}
                      </p>
                      <p className="upcomg-project-name">{task.project.title}</p>
                    </div>
                  );
                })}
              <AddTaskButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
