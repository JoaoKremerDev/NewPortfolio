import React, { useEffect, useState } from "react";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";
import { themes } from "../data";

const getStorageColor = () => {
  let color = 'hsl(271, 76%, 53%)';
  if(localStorage.getItem('dev_kremer_portfolio_color')) {
    color = localStorage.getItem('dev_kremer_portfolio_color')
  }
  return color;
}

const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme;
}
const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());


  const changeColor = (color) => {
    setColor(color);
  }

  const toggleTheme = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
    }
      else {
        setTheme('light-theme')
      }
  };

  useEffect(() => {
      document.documentElement.style.setProperty('--first-color', color);
      localStorage.setItem('dev_kremer_portfolio_color', color);
  }, [color])

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}, [theme, color])
  
  return (
    <div>
      <div className={`${showSwitcher ? 'show-switcher' : '' } style__switcher` }>
        <div className="style__switcher-toggler"  onClick={() => setShowSwitcher(!showSwitcher)}>
          <FaCog />
        </div>

        <div
          className="theme__toggler"
          onClick={toggleTheme}
        >
          {theme === 'light-theme' ? <BsMoon /> : <BsSun/>}
        </div>

        <h3 className="style__switcher-title">Sistema de Cores</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor={changeColor}/>;
          })}
        </div>

        <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
      </div>
    </div>
  );
};

export default Themes;
