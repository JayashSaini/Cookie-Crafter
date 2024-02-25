import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Franchise, Catering, Location } from "./Pages";
import Layout from "./Layout.tsx";

const App: React.FC = () => {
  return (
    <div className=" h-screen w-full ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/location" element={<Location />} />
            <Route path="/catering" element={<Catering />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
