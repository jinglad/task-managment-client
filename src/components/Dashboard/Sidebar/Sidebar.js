import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.scss";

const Sidebar = () => {
  const [registeredUser, setRegisteredUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://fast-citadel-29159.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  // console.log(registeredUser[0].profession)

  return (
    <div
      className="ml-5 sidebar d-flex flex-column justify-content-between  py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-decoration-none text-dark item" to="/tasks">
            Task
          </Link>
        </li>
        <li>
          {isAdmin && (
            <Link
              className="text-decoration-none text-dark item"
              to="/createTask"
            >
              Create Task
            </Link>
          )}
        </li>
        <li>
          {isAdmin && (
            <Link className="text-decoration-none text-dark item" to="/my-task">
              My Task
            </Link>
          )}
        </li>
        <li>
          {isAdmin && (
            <Link
              className="text-decoration-none text-dark item"
              to="/submittedTask"
            >
              Submitted Task
            </Link>
          )}
        </li>
        <li>
          <Link
            className="text-decoration-none text-dark item"
            to="/scoredTask"
          >
            Scored Task
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
