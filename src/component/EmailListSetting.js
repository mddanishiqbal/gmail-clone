import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";

const EmailListSetting = () => {
  return (
    <div className="emaillist_settings">
      <div className="emaillist_settingsLeft">
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>

      <div className="emaillist_settingRight">
        <p>1-50 of 10,222</p>
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailListSetting;
