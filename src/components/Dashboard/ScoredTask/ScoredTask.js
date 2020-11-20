import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const ScoredTask = () => {
    const [scoredTask, setScoredTask] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch(`https://kaput-road-tv.glitch.me/scoredTask`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setScoredTask(data);
            })
    }, []);
    console.log(scoredTask);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mt-5">
          <Link to="/" className="text-decoration-none">
            <button className="btn btn-primary mb-5 ml-75">Home</button>
          </Link>
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 mt-5">
          <h1 className="font-weight-bold">Score</h1>
          <div className="bg-light p-5 rounded">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student Email ID</th>
                  <th scope="col">Task ID</th>
                  <th scope="col">Task Name</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                {scoredTask.map((task) => (
                  <tr className="border">
                    <td>{task.name}</td>
                    <td>{task.email}</td>
                    <td>{task.task_id}</td>
                    <td>{task.task_name}</td>
                    <td>{task.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoredTask;
