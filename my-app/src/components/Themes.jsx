import React from "react";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";
import { themes } from "../data";

const Themes = () => {
  return (
    <div>
      <div className="style__switcher">
        <div className="style__switcher-toggle">
          <FaCog />
        </div>

        <div className="theme__toggler">
          <BsMoon />
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} />;
          })}
        </div>

          <div className="style__switcher-close">&times;</div>
      </div>
    </div>
  );
};

export default Themes;

console.log(themes)