import React from "react";
import IndicatorSelector from "../../../../assets/img/IndicatorSelector";
import s from "./ThisDayInfo.module.scss";

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

interface Props {
  item: Item;
}

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <IndicatorSelector id={icon_id} />
      <p className={s.indicator__name}>{name}</p>
      <p className={s.indicator__value}>{value}</p>
    </div>
  );
};

export default ThisDayItem;
