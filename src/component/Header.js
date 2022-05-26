import React from "react";
import "./Header.css";
import Reorder from "@material-ui/icons/Reorder";
import { Avatar, IconButton } from "@material-ui/core";
import GmailLogo from "../assets/logo.png";
import {
  Apps,
  ExpandMore,
  HelpOutline,
  Search,
  Settings,
} from "@material-ui/icons";
import MyAvatar from "../assets/mdi.PNG";

const Header = () => {
  return (
    <div className="header">
      {/* Left header */}
      <div className="header_left">
        <IconButton>
          <Reorder />
        </IconButton>
        <img src={GmailLogo} className="logo" alt="Gmail Logo" />
      </div>

      {/* Middle header */}
      <div className="header_middle">
        <div className="search_mail">
          <IconButton>
            <Search />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <ExpandMore />
          </IconButton>
        </div>
      </div>

      {/* Right header */}
      <div className="header_right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <Avatar src={MyAvatar} />
      </div>
    </div>
  );
};

export default Header;
