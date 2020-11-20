import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfessionContext } from "../../../App";
import Navbar from "../../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  const [profession, setProfession] = useContext(ProfessionContext);

  const handleProfession = profession => {
    setProfession(profession);
  }

  return (
    <div className="header-container">
      <Navbar></Navbar>
      <div className="header-txt">
        <h1>Online Photo Editing Bootcamp</h1>
      </div>
      <div className="login-btn">
        <Link to="/registration" onClick={() => handleProfession("instructor")}>
          <button className="btn-instructor">Instructor</button>
        </Link>
        <Link to="/level" onClick={() => handleProfession("student")}>
          <button className="btn-student">Student</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
