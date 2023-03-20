import image from "./Dashboard.png";
import "./Dashboard.css";
import MuiDrawer from "../Drawer/Drawer";
import React, { useState } from "react";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (e: any) => {
    if (e.target.id === "background") setIsDrawerOpen(!isDrawerOpen);
    if (e.target.style.opacity === "1") setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      id="background"
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
