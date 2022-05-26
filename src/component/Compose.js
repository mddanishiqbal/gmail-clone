import {
  ArrowDropDown,
  AttachFile,
  Close,
  Create,
  Delete,
  FormatColorText,
  Height,
  InsertEmoticon,
  Link,
  MoreVert,
  NoteAdd,
  PhonelinkLock,
  Photo,
  Remove,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Compose.css";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Compose = () => {
  const dispatch = useDispatch();

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("To is required");
    }
    if (subject === "") {
      return alert("Subject is required");
    }
    if (message === "") {
      return alert("Message is required");
    }

    db.collection("emails").add({
      to,
      subject,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTo("");
    setSubject("");
    setMessage("");
    alert("Email sent successfully");
    dispatch(closeSendMessage());
  };

  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <Remove />
          <Height />
          <Close onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>

      <form onSubmit={formSubmit}>
        <div className="compose_body">
          <div className="compose_body_form">
            <input
              type="email"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea rows="20" onChange={(e) => setMessage(e.target.value)}>
              {message}
            </textarea>
          </div>
        </div>

        <div className="compose_footer">
          <div className="compose_footer-left">
            <button type="submit">
              send <ArrowDropDown />
            </button>
          </div>
          <div className="compose_footer_right">
            <FormatColorText />
            <AttachFile />
            <Link />
            <InsertEmoticon />
            <NoteAdd />
            <Photo />
            <PhonelinkLock />
            <Create />
            <MoreVert />
            <Delete />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
