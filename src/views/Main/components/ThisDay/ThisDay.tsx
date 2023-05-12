import * as React from "react";
import { useState, useEffect } from "react";
import s from "./ThisDay.module.scss"
import ImgSelector from "../../../../assets/img/ImgSelector";

// interface Props {
//     weather: Weather;
//   }

const ThisDayInfo = () => {
  return (
    <div className={s.thisDay}>
      <div className={s.top}>
        <div className={s.temp}>20</div>
        <div className={s.day}>Сегодня</div>
      </div>
      {/* <ImgSelector id="sun" /> */}
      <div className={s.bottom}>
        <div className={s.time}>
          Время: <span>16.12</span>
        </div>
        <div className={s.city}>Москва</div>
      </div>
    </div>
  );
};

export default ThisDayInfo;
