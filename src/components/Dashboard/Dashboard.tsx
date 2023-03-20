import image from "./Dashboard.png";
import "./Dashboard.css";
import MuiDrawer from "../Drawer/Drawer";
import React, { useState } from "react";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      onClick={handleClick}
      className="Dashboard"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {isDrawerOpen ? <MuiDrawer /> : null}
    </div>
  );
};
export { Dashboard };
