import * as React from "react";
import { useState, useEffect } from "react";
import s from "./ThisDayInfo.module.scss";
import Select from "react-select";
import ThisDayItem from "./ThisDayItem";
import { Item } from "./ThisDayItem";
import cloud1 from "../../../../assets/img/cloud/cloud-01.png"
import cloud2 from "../../../../assets/img/cloud/cloud-02.png"
import cloud3 from  "../../../../assets/img/cloud/cloud-03.png"
import cloud4 from  "../../../../assets/img/cloud/cloud-04.png"


interface Props {}

const ThisDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={s.thisDayInfo}>
      {items.map((item: Item) => (
        <ThisDayItem key={item.icon_id} item={item} />
      ))}
      <img src={cloud1} className={s.cloud1} />
      <img src={cloud2} className={s.cloud2} />
      <img src={cloud3} className={s.cloud3} />
      <img src={cloud4} className={s.cloud4} />
    </div>
  );
};

export default ThisDayInfo;
