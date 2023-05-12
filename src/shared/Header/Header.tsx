import * as React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import s from "./Header.module.scss";
import ImgSelector from "../../assets/img/ImgSelector";

const Header = () => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const colorStyle = {
    control: (styles: any) => ({
      ...styles,
    //   backgroundColor:
    //     theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "200px",
      height: "40px",
      border: "none",
      borderRadius: "10px",
      zIndex: 1,
    }),
    // singleValue: (styles: any) => ({
    //   ...styles,
    //   color: theme.theme === Theme.DARK ? "#fff" : "#000",
    // }),
  };

//   function changeTheme() {
//     theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
//   }

  return (
    <div className={s.header}>
      <div className={s.title}>Weather</div>
      <div className={s.toggle}>
        <ImgSelector id="change-theme" />
      </div>
      <Select
        defaultValue={options[0]}
        styles={colorStyle}
        options={options}
      />
    </div>
  );
};

export default Header;
