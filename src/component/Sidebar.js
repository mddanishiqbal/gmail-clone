import { Button } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import ComposeIcon from "../assets/compose.png";
import SidebarOptions from "./SidebarOptions";
import {
  Delete,
  Drafts,
  ExpandMore,
  Inbox,
  Keyboard,
  Label,
  LabelImportant,
  Send,
  StarRate,
  Videocam,
  WatchLater,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="compose_btn"
        onClick={() => dispatch(openSendMessage())}
      >
        <img src={ComposeIcon} className="compose_icon" alt="Compose Icon" />
        Compose
      </Button>

      <SidebarOptions Icon={Inbox} title="Inbox" number="244" isactive={true} />
      <SidebarOptions Icon={StarRate} title="Starred" number="500" />
      <SidebarOptions Icon={WatchLater} title="Snoozed" number="300" />
      <SidebarOptions Icon={LabelImportant} title="Important" number="25" />
      <SidebarOptions Icon={Send} title="Sent" number="220" />
      <SidebarOptions Icon={Drafts} title="Drafts" number="245" />
      <SidebarOptions Icon={Label} title="Category" number="12" />
      <SidebarOptions Icon={Delete} title="Map/Trash" number="245" />
      <SidebarOptions Icon={ExpandMore} title="More" number="245" />

      <div className="hr">
        <h3 className="sidebarOptions_heading">Meet</h3>
        <SidebarOptions Icon={Videocam} title="New meeting" />
        <SidebarOptions Icon={Keyboard} title="Join a meeting" />

        <h3 className="sidebarOptions_heading">Hangouts</h3>
        <SidebarOptions Icon={Videocam} title="New meeting" />
        <SidebarOptions Icon={Keyboard} title="Join a meeting" />
      </div>
    </div>
  );
};

export default Sidebar;
