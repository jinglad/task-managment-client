import { library } from "@fortawesome/fontawesome-svg-core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import MyTaskItem from "../MyTaskItem/MyTaskItem";
import Sidebar from "../Sidebar/Sidebar";
import Task from "../Task/Task";

const MyTask = () => {
  const [registeredUser, setRegisteredUser] = useState({});
  const [myTask, setMytask] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://kaput-road-tv.glitch.me/registeredUser")
      .then((res) => res.json())
      .then((data) => setRegisteredUser(data));
  }, []);


  useEffect(() => {
    fetch(`https://kaput-road-tv.glitch.me/my-task?email=${loggedInUser.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMytask(data);
        // console.log("data came");
      });
  }, []);


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-5">
            <Link to="/">
              <button className="btn btn-primary mb-5 ml-75">Home</button>
            </Link>
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8 mt-5">
            <h1 className="font-weight-bold">Created Task</h1>
            <div className="bg-light p-5 rounded">
              <div className="row">
                {myTask.map((task) => (
                  <MyTaskItem task={task}></MyTaskItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
