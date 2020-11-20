import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskScoreContext } from "../../../App";

const SubmittedTaskItem = (props) => {
  const { name, email } = props.task;
  const img = `data:image/jpeg;base64,${props.task.image.img}`;
  const [taskScore, setTaskScore] = useContext(TaskScoreContext);

  const handleScore = () => {
    setTaskScore(props.task);
  }


  

  return (
    <div className="col-md-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title mr-3">{name}</h5>
          <p class="card-text">{email}</p>
          <Link to="/taskScore" onClick={handleScore} class="btn btn-primary">
            Score task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmittedTaskItem;
