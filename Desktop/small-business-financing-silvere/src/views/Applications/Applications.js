import React from "react";
import Header from "../../components/Header/Header";
import LeftPanel from "./components/LeftPanel";
import "./Applications.css";

const Applications = () => {
  return (
    <div>
      <Header pageName="applications" />
      <div className="body applicationBody">
        <div className="leftPanel">
          <LeftPanel />
        </div>
        <div className="mainScreen"></div>
      </div>
    </div>
  );
};

export default Applications;
