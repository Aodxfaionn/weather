import * as React from "react";
import { useState, useEffect } from "react";
import s from "./Main.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";

const Main = () => {
  return (
    <div className={s.mainScreen}>
      <ThisDay />
      <ThisDayInfo />
      <Days />
    </div>
  );
};

export default Main;
