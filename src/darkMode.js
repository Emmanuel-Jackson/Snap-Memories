import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
//Add switch
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
     
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);

  }, [darkMode]);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="theme-switch-wrapper"
    >
      Dark/Light
    </Button>
  );

}



export default DarkMode;
