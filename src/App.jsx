import React from "react";
import Registration from "./Pages/Registration";
import LogInPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/AplicationPages/Home"

import AplicationPages from "./Pages/AplicationPages";
import Message from "./Component/AplicationPages/Message";
import Notification from "./Component/AplicationPages/Notification";
import Settings from "./Component/AplicationPages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<AplicationPages />}>
          <Route index element={<Home/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/settings" element={<Settings/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
