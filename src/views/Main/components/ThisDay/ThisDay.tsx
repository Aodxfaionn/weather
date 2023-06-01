import * as React from "react";
import { useState, useEffect } from "react";
import s from "./ThisDay.module.scss";
import ImgSelector from "../../../../assets/img/ImgSelector";

// interface Props {
//     weather: Weather;
//   }

const ThisDayInfo = () => {
  return (
    <div className={s.thisDay}>
      <div className={s.thisDay__block}>
        <div>
          <p className={s.temp}>20°</p>
          <p className={s.name}>Среда</p>
        </div>
        <div className={s.img}>
          <ImgSelector id="sun" />
        </div>
      </div>
      <div className={s.thisDay__block}>
        <p className={s.time}>
          Время: <span>21:54</span>
        </p>
        <p className={s.city}>
          Город: <span>Москва</span>
        </p>
      </div>
    </div>
  );
};

export default ThisDayInfo;
