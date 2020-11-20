import React from "react";
import img1 from "../../img/beginners.jpg";
import img2 from "../../img/intermediate.jpg";
import img3 from "../../img/advance.jpg";
import Level from "../Level/Level";

const fakeLevels = [
  {
    title: "Beginner",
    img: img1,
  },
  {
    title: "Intermediate",
    img: img2,
  },
  {
    title: "Advanced",
    img: img3,
  },
];

const Levels = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        {fakeLevels.map((level) => (
          <Level level={level}></Level>
        ))}
      </div>
    </div>
  );
};

export default Levels;
