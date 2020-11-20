import React from "react";

const MyTaskItem = (props) => {
  const {task_id, task_name, description } = props.task;
  const img = `data:image/jpeg;base64,${props.task.image.img}`;
  
  return (
    <div className="col-md-4">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="d-flex">
            <h5 class="card-title mr-3">{task_id}</h5>
            <h5 class="card-title">{task_name}</h5>
          </div>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MyTaskItem;
