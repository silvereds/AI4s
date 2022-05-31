import React, { useState } from "react";

const LeftPanel = () => {
  const menuItems = [
    {
      id: 0,
      name: "New Request",
      total: 5,
    },
    {
      id: 1,
      name: "Processing",
      total: 3,
    },
    {
      id: 2,
      name: "In Review",
      total: 3,
    },
    {
      id: 3,
      name: "Approved",
      total: 3,
    },
    {
      id: 4,
      name: "Active",
      total: 10,
    },
    {
      id: 5,
      name: "Rejected",
      total: 1,
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div
      style={{
        minWidth: "100%",
        minHeight: "100%",
        paddingLeft: "20px",
      }}
    >
      <div className="pageName">Applications</div>
      <div className="aMenuItems">
        {menuItems.map((item, index) => {
          return (
            <div
              className="aMenuItem flexRow"
              key={index}
              onClick={() => {
                setSelectedMenu(item.id);
              }}
            >
              <div
                className={`aMenuText ${
                  selectedMenu === item.id ? "aMenuTextActive" : null
                }`}
              >
                {item.name}
              </div>
              <div
                className={`aMenuNumber ${
                  selectedMenu === item.id ? "aMenuNumberActive" : null
                }`}
              >
                {item.total}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
