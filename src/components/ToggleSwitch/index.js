import React from "react";
import "./index.scss";

const ToggleSwitch = ({toggleTheme}) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onChange={toggleTheme}/>
      <span className="switch" />
    </label>
  );
};

export default ToggleSwitch;