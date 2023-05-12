import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./views/Main/Main";
import Mounth from "./views/Main/Main";
import Header from "./shared/Header/Header";
import Modal from "./shared/Modal/Modal";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      {/* <Modal /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="month" element={<Mounth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
