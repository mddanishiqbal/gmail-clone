import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import EmailBody from "./EmailBody";
import "./EmailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";

const EmailList = () => {
  const [email, setEmail] = useState();

  useEffect(() => {
    db.collection("emails").onSnapshot((snapshot) => {
      setEmail(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailist">
      <EmailListSetting />
      <EmailType />
      {/* <EmailBody
        name="Md"
        subject="gfhjmgjh"
        // message="We are learning react js. We are learning react js. We are learning react js. We are learning react js. We are learning react js. We are learning react js"
        // time="03: 20 PM"
      /> */}

      {email.map(({ id, data }) => {
        return (
          <EmailBody
            key={id}
            name={data.to}
            subject={data.sub}
            message="We are learning react js. We are learning react js. We are learning react js. We are learning react js. We are learning react js. We are learning react js"
            time="03: 20 PM"
          />
        );
      })}
    </div>
  );
};

export default EmailList;
