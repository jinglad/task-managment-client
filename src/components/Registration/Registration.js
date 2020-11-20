import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfessionContext, RegistrationContext, UserContext } from "../../App";
import Navbar from "../Navbar/Navbar";
import "./Registration.scss";

const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [registration, setRegistration] = useContext(RegistrationContext);
  const [profession, setProfession] = useContext(ProfessionContext);


  const onSubmit = (data) => {
    console.log(data);
    fetch('https://kaput-road-tv.glitch.me/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Registration is Successfull...!');
                }
            })
  };

  return (
    <div className="container mt-2">
      <Navbar></Navbar>
      <div className="registration-form">
        <h3 className="mb-4">Register as a {profession}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              name="name"
              type="text"
              defaultValue={loggedInUser.name}
              ref={register({ required: true })}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              defaultValue={loggedInUser.email}
              ref={register({ required: true })}
              placeholder="Username or Email"
            />
          </div>
          <div className="form-group">
            <input
              name="profession"
              ref={register({ required: true })}
              defaultValue={profession}
              className="form-control"
              placeholder="profession"
            />
          </div>
          {profession === "student" && (
            <div className="form-group">
              <input
                className="form-control"
                name="level_title"
                type="text"
                defaultValue={registration.title}
                ref={register({ required: true })}
                placeholder="Organize books at the library."
              />
            </div>
          )}
          <div className="form-group">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Registration"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
