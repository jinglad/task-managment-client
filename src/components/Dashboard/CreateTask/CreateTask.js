import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SubmitTaskContext, UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const CreateTask = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  let history = useHistory();

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };


  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("instructor_name", loggedInUser.name);
    formData.append("instructor_email", loggedInUser.email);
    formData.append("task_id", info.task_id);
    formData.append("task_name", info.task_name);
    formData.append("description", info.description);

    fetch("https://kaput-road-tv.glitch.me/createTask", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Task is created...!..check your Task list...Thank you...!");
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
          <h1 className="font-weight-bold">Create Task</h1>
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
                  name="task_id"
                  placeholder="Task ID"
                />
              </div>
              <div className="form-group">
                <input
                  onBlur={handleBlur}
                  className="form-control font-weight-bold form-control-lg"
                  type="text"
                  name="task_name"
                  placeholder="Task Name"
                />
              </div>
              <div className="form-group">
                <textarea
                  onBlur={handleBlur}
                  name="description"
                  cols="15"
                  rows="5"
                  className="form-control font-weight-bold form-control-lg"
                  placeholder="Task Description"
                ></textarea>
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

export default CreateTask;
