import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { TaskScoreContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const TaskScore = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const [taskScore, setTaskScore] = useContext(TaskScoreContext);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  let history = useHistory();

  const handleSubmit = () => {
        const formData = new FormData();
        formData.append("student_name", taskScore.name);
        formData.append("student_email", taskScore.email);
        formData.append("task_id", taskScore.task_id);
        formData.append("task_name", taskScore.task_name);
        formData.append("score", info.score);
    
        fetch("https://kaput-road-tv.glitch.me/scoreTask", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              alert("Score is saved...!..check your Task Score list...Thank you...!");
            }
          })
          .catch((error) => {
            console.error(error);
          });
          history.push("/");
  }

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
          <h1 className="font-weight-bold">Submit Task</h1>
          <div className="bg-light p-5 rounded">
            <form
              onSubmit={handleSubmit}
              style={{ width: "600px", marginTop: "100px" }}
            >
              <div className="form-group">
                <input
                  onBlur={handleBlur}
                  className="form-control font-weight-bold form-control-lg"
                  type="text"
                  name="student_name"
                  value={taskScore.name}
                  placeholder="Student Name"
                />
              </div>
              <div className="form-group">
                <input
                  onBlur={handleBlur}
                  className="form-control font-weight-bold form-control-lg"
                  type="email"
                  name="student_email"
                  value={taskScore.email}
                  placeholder="Student Email"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                  <input
                    onChange={handleBlur}
                    className="form-control-lg"
                    type="text"
                    name="score"
                    placeholder="Task Score"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-dark"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskScore;
