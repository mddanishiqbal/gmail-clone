import { Inbox, LocalOffer, People } from "@material-ui/icons";
import React from "react";
import "./EmailList.css";

const EmailType = () => {
  return (
    <div className="email_type">
      <div className="email_type_options active">
        <Inbox />
        <p>Primary</p>
      </div>
      <div className="email_type_options">
        <People />
        <p>Social</p>
      </div>
      <div className="email_type_options">
        <LocalOffer />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
