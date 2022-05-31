import React from "react";
import "./Header.css";
import logo from "../../assets/icons/kbmLogo.svg";
import "../../assets/icons/iconFonts/demo/css/style.css";
import { MenuItem, Select, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/profile.jpg";
import { Notifications } from "@mui/icons-material";

const Header = ({ pageName }) => {
  const pages = [
    {
      name: "dashboard",
      url: "/dashboard",
    },
    {
      name: "applications",
      url: "/applications",
    },
    {
      name: "loans",
      url: "/loans",
    },
    {
      name: "reviews",
      url: "/reviews",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="headerBody">
      <div className="logo" onClick={() => navigate("./dashboard")}>
        <img
          src={logo}
          alt="KBM"
          style={{
            marginRight: "5px",
          }}
        />
        <Typography
          style={{
            fontSize: 25,
            color: "#F88122",
            fontWeight: 500,
          }}
        >
          Financing
        </Typography>
      </div>
      <div className="headerLinks">
        {pages.map((page, index) => {
          return (
            <div
              index={index}
              className="navLink"
              style={{
                color: pageName === page.name ? "#0FB9C5" : "#605076",
                borderBottom:
                  pageName === page.name ? "3px solid #0FB9C5" : "none",
              }}
              onClick={() => navigate(page.url)}
              key={index}
            >
              <i className={`icon icon-${page.name}`}></i>
              <Typography
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {page.name}
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="headerRight">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Notifications />

          <a
            target="_blank"
            href={image}
            rel="noreferrer"
            style={{
              width: "50px",
              height: "50px",
              padding: "2px",
              border: "2.5px solid #EFEFEF",
              borderRadius: "100%",
              margin: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt="Profile"
              width="45px"
              height="45px"
              style={{
                borderRadius: "100%",
              }}
            />
          </a>
          <Tooltip
            className="tooltip"
            title="Darwin Microfinance Worldwide Cameroon International Africa SARL"
            arrow
          >
            <div
              style={{
                maxWidth: "100%",
                marginRight: "5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Darwin Microfinance Worldwide Cameroon International Africa SARL
            </div>
          </Tooltip>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            disableUnderline
            style={{ width: "auto", border: "none !important" }}
          >
            <MenuItem index={0}>Logout</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
