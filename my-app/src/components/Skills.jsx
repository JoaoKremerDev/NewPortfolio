import React from "react";
import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={5.0}
                text={`${title}`}
                value={percentage}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
