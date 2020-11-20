import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SubmitTaskContext } from "../../../App";

const TaskItem = (props) => {
    const {task_name, task_id, description} = props.task;
    const img = `data:image/jpeg;base64,${props.task.image.img}`;
    const [submitTask, setSubmitTask] = useContext(SubmitTaskContext);

    const handleSubmitTask = () => {
      setSubmitTask(props.task);
    };

  return (
    <div className="col-md-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="d-flex">
            <h5 class="card-title mr-3">{task_id}</h5>
            <h5 class="card-title">{task_name}</h5>
          </div>
          <p class="card-text">
           {description}
          </p>
          <Link to="/submitTask" onClick={handleSubmitTask} class="btn btn-primary">
            Submit task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
