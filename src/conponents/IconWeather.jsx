import React from 'react'

  import daySunny from '../icons/WiDaySunny.gif';
  import nightClear from '../icons/WiNightClear.gif';
  import dayCloudy from '../icons/WiDayCloudy.gif';
  import nightCloudy from '../icons/WiNightCloudy.gif';
  import cloud from '../icons/WCloud.gif';
  import rainMix from '../icons/WiNightRainMix.gif';
  import dayRainMix from '../icons/WiDayRainMix.gif';
  import thunderStorm from '../icons/WiThunderStorm.gif';
  import snow from '../icons/WiSnow.gif';
  import fog from '../icons/WiFog.gif';
  
  
  const weatherIcons = new Map([
    [
      "01d",
      (size) => {
        return <img src={daySunny} width={size}  />;
      }
    ],
    [
      "01n",
      (size) => {
        return <img src={nightClear} width={size}  />;
      }
    ],
    [
      "02d",
      (size) => {
        return <img src={dayCloudy} width={size}  />;
      }
    ],
    [
      "02n",
      (size) => {
        return <img src={nightCloudy} width={size}  />;
      }
    ],
    [
      "03d",
      (size) => {
        return <img src={cloud} width={size}  />;
      }
    ],
    [
      "03n",
      (size) => {
        return <img src={cloud} width={size}  />;
      }
    ],
    [
      "04d",
      (size) => {
        return <img src={cloud} width={size}  />;
      }
    ],
    [
      "04n",
      (size) => {
        return <img src={cloud} width={size} />;
      }
    ],
    [
      "09d",
      (size) => {
        return <img src={rainMix} width={size} />;
      }
    ],
    [
      "09n",
      (size) => {
        return <img src={rainMix} width={size}  />;
      }
    ],
    [
      "10d",
      (size) => {
        return <img src={dayRainMix} width={size}  />;
      }
    ],
    [
      "10n",
      (size) => {
        return <img src={rainMix} width={size}  />;
      }
    ],
    [
      "11d",
      (size) => {
        return <img src={thunderStorm} width={size} />;
      }
    ],
    [
      "11n",
      (size) => {
        return <img src={thunderStorm} width={size}  />;
      }
    ],
    [
      "13d",
      (size) => {
        return <img src={snow} width={size}  />;
      }
    ],
    [
      "13n",
      (size) => {
        return <img src={snow} width={size}  />;
      }
    ],
    [
      "50d",
      (size) => {
        return <img src={fog} width={size} />;
      }
    ],
    [
      "50n",
      (size) => {
        return <img src={fog} width={size} />;
      }
    ]
  ]);
  
  export const IconWeather = ({ id, size, color }) => {
    return weatherIcons.get(id)(size, color);
  };
  