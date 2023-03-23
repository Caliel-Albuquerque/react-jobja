import React from "react";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Addvaga } from "../pages/AddVagaCompany/Addvaga";


function AppRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/vagas" element={<Addvaga />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRoutes;