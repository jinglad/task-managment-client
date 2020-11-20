import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TaskItem from "../TaskItem/TaskItem";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`https://kaput-road-tv.glitch.me/fullTaskList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Link to="/" className="text-decoration-none">
            <button className="btn btn-primary mb-5 ml-75">Home</button>
          </Link>
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 mt-5">
          <h1 className="font-weight-bold">Task List</h1>
          <div className="bg-light p-5 rounded">
            <div className="row">
              {tasks.map((task) => (
                <TaskItem task={task}></TaskItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
