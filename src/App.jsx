import React from "react";
import Registration from "./Pages/Registration";
import LogInPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/AplicationPages/Home"

import AplicationPages from "./Pages/AplicationPages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/" element={<AplicationPages />}>
          <Route index element={<Home/>} />
          <Route path="/notification" element={"this is notification pages"} />
          <Route path="/message" element={"this is message pages"} />
          <Route path="/settings" element={"this is settings pages"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
