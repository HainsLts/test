import { useState } from "react";
import { RadarComponent } from "./RadarComponent";
import React from "react";
import WeeklyForcecastComponent, {
  WeeklyForcecastProps
} from "./WeeklyForcecastComponent";

export default function TestRadarComponent() {
  const dummyData: WeeklyForcecastProps = [
    {
      id: "1",
      day: "Monday",
      moringInforWeather: {
        temp: "25°C",
        humidity: "60%",
        iconName: "sunny",
        linearColor: ["#66D1E0", "#3C8CE7"],
        colorName: "#FAFBFE",
        humidityColor: "#5A6672"
      },
      eveningInforWeather: {
        temp: "22°C",
        humidity: "70%",
        iconName: "cloudy",
        linearColor: ["#0D2B54", "#0D2B54"],
        colorName: "#AFB8C0",
        humidityColor: "#5A6672"
      }
    },
    {
      id: "2",
      day: "Tuesday",
      moringInforWeather: {
        temp: "28°C",
        humidity: "50%",
        iconName: "partly-sunny",
        linearColor: ["#FAFBFE", "#FAFBFE"],
        colorName: "partlySunnyOrange",
        humidityColor: "#5A6672"
      },
      eveningInforWeather: {
        temp: "22°C",
        humidity: "70%",
        iconName: "cloudy",
        linearColor: ["#0D2B54", "#0D2B54"],
        colorName: "#AFB8C0",
        humidityColor: "#5A6672"
      }
    },
    {
      id: "3",
      day: "Wednesday",
      moringInforWeather: {
        temp: "26°C",
        humidity: "55%",
        iconName: "windy",
        linearColor: ["#ADD8E6", "#87CEEB"],
        colorName: "windySkyBlue",
        humidityColor: "#5A6672"
      },
      eveningInforWeather: {
        temp: "23°C",
        humidity: "72%",
        iconName: "thunderstorm",
        linearColor: ["#4B0082", "#8A2BE2"],
        colorName: "stormyPurple",
        humidityColor: "#5A6672"
      }
    },
    {
      id: "4",
      day: "Wednesday",
      moringInforWeather: {
        temp: "26°C",
        humidity: "55%",
        iconName: "windy",
        linearColor: ["#ADD8E6", "#87CEEB"],
        colorName: "windySkyBlue",
        humidityColor: "#5A6672"
      },
      eveningInforWeather: {
        temp: "23°C",
        humidity: "72%",
        iconName: "thunderstorm",
        linearColor: ["#4B0082", "#8A2BE2"],
        colorName: "stormyPurple",
        humidityColor: "#5A6672"
      }
    }
    // Add more days as needed
  ];

  const [data, setData] = useState(dummyData);
  return <WeeklyForcecastComponent weeklyForcecastProps={data} />;
}
