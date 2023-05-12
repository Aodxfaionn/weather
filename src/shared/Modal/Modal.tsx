import React from "react";
import Select from "react-select";
import ImgSelector from "../../assets/img/ImgSelector";
import { Item } from "../../views/Main/components/ThisDayInfo/ThisDayItem";
import ThisDayItem from "../../views/Main/components/ThisDayInfo/ThisDayItem";
import s from "./Modal.module.scss";

interface Props {}

const Modal = ({}: Props) => {
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
    <>
      <div className={s.modal}>
        <div className={s.modal__content}>
          <div className={s.day}>
            <div className={s.temp}>20°</div>
            <div className={s.name}>Среда</div>
            <div className={s.img}>
              <ImgSelector id="sun" />
            </div>
            <div className={s.time}>
              Время: <span>21:54</span>
            </div>
            <div className={s.city}>
              Время: <span>Москва</span>
            </div>
          </div>
          <div className={s.thisDayInfo__items}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item} />
            ))}
          </div>
          <div className={s.close}>
            <ImgSelector id="close" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
