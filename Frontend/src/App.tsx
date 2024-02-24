import React from "react";
import "./App.css";
import Layout from "./Layout.tsx";
import Home from "./Pages/Home/Home.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className=" h-screen w-full ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
