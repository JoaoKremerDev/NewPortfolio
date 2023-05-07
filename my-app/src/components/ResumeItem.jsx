import React, { useState } from 'react';
import parse from 'html-react-parser';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const ResumeItem = ({ icon, year, title, desc }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="resume__item" onClick={toggleExpanded}>
      <div className="resume__icon">{icon}</div>

      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">
        {parse(title)}
      </h3>
      {expanded && (
        <p className={`resume__description ${expanded ? 'expanded' : ""}`}>{desc}</p>
      )}
    </div>
  );
};

export default ResumeItem;
