import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RegistrationContext } from "../../App";

const Level = (props) => {
  const { title,img } = props.level;
  const [registration, setRegistration] = useContext(RegistrationContext);

  const handleInfo = item => {
    setRegistration(item);
  }

  return (
    <div className="col-md-4">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nihil voluptate aspernatur, debitis animi doloribus vel praesentium iure ipsum repellendus
            </p>
            <Link to="/registration" onClick={() => handleInfo(props.level)} className="btn btn-primary">
              Registration
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Level;
