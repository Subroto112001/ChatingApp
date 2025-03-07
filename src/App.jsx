import React from "react";
import Registration from "./Pages/Registration";
import LogInPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router";
import HomPages from "./Pages/HomPages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/home" element={<HomPages />} />
       
        
   
      </Routes>
    </BrowserRouter>
  );
};

export default App;
