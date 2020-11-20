import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SubmitTaskContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const SubmitTask = () => {
  const [submitTask, setSubmitTask] = useContext(SubmitTaskContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);


  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  let history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("student_name", loggedInUser.name);
    formData.append("student_email", loggedInUser.email);
    formData.append("task_id", submitTask.task_id);
    formData.append("task_name", submitTask.task_name);
    formData.append("description", submitTask.description);

    fetch("https://kaput-road-tv.glitch.me/submitTask", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert(
            "Task is submitted...!...Thank you...!"
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
      history.push("/");
  };

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
                  value={loggedInUser.name}
                  placeholder="Student Name"
                />
              </div>
              <div className="form-group">
                <input
                  onBlur={handleBlur}
                  className="form-control font-weight-bold form-control-lg"
                  type="email"
                  name="student_email"
                  value={loggedInUser.email}
                  placeholder="Student Email"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                  <input
                    onChange={handleFileChange}
                    className="form-control-lg"
                    type="file"
                    name=""
                    id=""
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

export default SubmitTask;
