import * as React from "react";
import { useState, useEffect } from "react";
import s from "./Main.module.scss";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

interface Props {}

const Main = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);
  useEffect(() => {
    dispatch(fetchCurrentWeather("moscow"));
    console.log(weather)
  }, []);
  return (
    <div className={s.mainScreen}>
      <ThisDay weather={weather} />
      <ThisDayInfo />
      <Days />
    </div>
  );
};

export default Main;
