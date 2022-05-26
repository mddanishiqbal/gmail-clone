import React from "react";
import { useSelector } from "react-redux";
import Compose from "./component/Compose";
import EmailList from "./component/EmailList";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

const App = () => {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
      </div>

      {isMessageOpen && <Compose />}
    </div>
  );
};

export default App;
