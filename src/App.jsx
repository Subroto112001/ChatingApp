import React from "react";
import Registration from "./Pages/Registration";
import LogInPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/AplicationPages/Home";

import AplicationPages from "./Pages/AplicationPages";
import Message from "./Component/AplicationPages/Message";
import Notification from "./Component/AplicationPages/Notification";
import Settings from "./Component/AplicationPages/Settings";
import SettingsRoute from "./Component/AplicationPages/SettingsRoute";
import Starter from "./Component/Eliment/SettingsEliment/Starter";
import EditProfile from "./Component/Eliment/SettingsEliment/EditProfile";
import ProfilePhoto from "./Component/Eliment/SettingsEliment/ProfilePhoto";
import ProfileStatus from "./Component/Eliment/SettingsEliment/ProfileStatus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<AplicationPages />}>
          <Route index element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<SettingsRoute />}>
            <Route path="/settings" element={<Starter />} />
            <Route path="/settings/edit" element={<EditProfile />} />
            <Route path="/settings/prophoto" element={<ProfilePhoto />} />
            <Route path="/settings/status" element={<ProfileStatus />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
