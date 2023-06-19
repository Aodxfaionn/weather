import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./views/Main/Main";
import Mounth from "./views/Main/Main";
import Header from "./shared/Header/Header";
import Modal from "./shared/Modal/Modal";
import { store } from "./store/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          {/* <Modal /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="month" element={<Mounth />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
