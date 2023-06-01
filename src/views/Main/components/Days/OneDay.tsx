import React from "react";
import ImgSelector from "../../../../assets/img/ImgSelector";
import { Day } from "./Days";
import s from "./Days.module.scss";

interface Props {
  day: Day;
}

const OneDay = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.card__block}>
        <p className={s.day}>{day.day}</p>
        <p className={s.day__info}>{day.day_info}</p>
      </div>
      <ImgSelector id={day.icon_id} />
      <div className={s.card__block}>
        <p className={s.temp__day}>{day.temp_day}</p>
        <p className={s.temp__night}>{day.temp_day}</p>
      </div>
      <p className={s.info}>{day.info}</p>
    </div>
  );
};

export default OneDay;
