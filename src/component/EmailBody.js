import {
  CheckBoxOutlineBlank,
  LabelOutlined,
  StarBorder,
} from "@material-ui/icons";
import React from "react";
import "./EmailList.css";

const EmailBody = ({ name, subject, message, time }) => {
  return (
    <div className="email_body">
      <div className="email_body_left">
        <CheckBoxOutlineBlank />
        <StarBorder />
        <LabelOutlined />
        <h4>{name}</h4>
      </div>

      <div className="email_body_middle">
        <div className="email_body_middle_msg">
          <p>
            <b>{subject}</b> &nbsp;&nbsp;{message}
          </p>
        </div>
      </div>

      <div className="email_body_right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
