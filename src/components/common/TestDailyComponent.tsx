import {
  DailyComponent,
  DailyForecastProps,
  TemperatureType
} from "./DailyComponent";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

export default function TestDailyComponent() {
  const forecasts: DailyForecastProps = [
    {
      id: "1",
      day: {
        dayName: "Monday",
        date: "May 1, 2023"
      },
      temperature1: {
        id: "temp1",
        isCollapse: false,
        Temperatures: [
          {
            id: "1",
            iconName: "app-store",
            value: "30°C",
            temperatureType: TemperatureType.Temperature
          },
          {
            id: "2",
            iconName: "app-store",
            value: "80%",
            temperatureType: TemperatureType.Humidity
          },
          {
            id: "3",
            iconName: "app-store",
            value: "15 km/h",
            temperatureType: TemperatureType.WsDirection
          }
        ],
        content: {
          heading: "Partly Cloudy",
          description:
            "The sky is currently partly cloudy with a few wispy clouds."
        }
      },
      temperature2: {
        id: "temp2",
        isCollapse: true,
        Temperatures: [
          {
            id: "1",
            iconName: "app-store",
            value: "25°C",
            temperatureType: TemperatureType.Temperature
          },
          {
            id: "2",
            iconName: "app-store",
            value: "70%",
            temperatureType: TemperatureType.Humidity
          },
          {
            id: "3",
            iconName: "app-store",
            value: "10 km/h",
            temperatureType: TemperatureType.WsDirection
          }
        ],
        content: {
          heading: "Clear Sky",
          description: "The sky is clear with plenty of sunshine."
        }
      }
    }
    // {
    //   id: "2",
    //   day: {
    //     dayName: "Tuesday",
    //     date: "May 2, 2023",
    //   },
    //   temperature1: {
    //     id: "temp3",
    //     isCollapse: false,
    //     iconName: "cloud",
    //     value: "28°C",
    //     Temperatures: [
    //       {
    //         iconName: "thermometer",
    //         value: "28°C",
    //         temperatureType: TemperatureType.Temperature,
    //       },
    //       {
    //         iconName: "humidity",
    //         value: "75%",
    //         temperatureType: TemperatureType.Humidity,
    //       },
    //       {
    //         iconName: "wind",
    //         value: "20 km/h",
    //         temperatureType: TemperatureType.WsDirection,
    //       },
    //     ],
    //     content: {
    //       heading: "Cloudy",
    //       description: "The sky is mostly cloudy with a chance of rain.",
    //     },
    //   },
    //   temperature2: {
    //     id: "temp4",
    //     isCollapse: true,
    //     iconName: "rain",
    //     value: "22°C",
    //     Temperatures: [
    //       {
    //         iconName: "thermometer",
    //         value: "22°C",
    //         temperatureType: TemperatureType.Temperature,
    //       },
    //       {
    //         iconName: "humidity",
    //         value: "90%",
    //         temperatureType: TemperatureType.Humidity,
    //       },
    //       {
    //         iconName: "wind",
    //         value: "25 km/h",
    //         temperatureType: TemperatureType.WsDirection,
    //       },
    //     ],
    //     content: {
    //       heading: "Rainy",
    //       description: "Expect heavy rain throughout the day.",
    //     },
    //   },
    // },
    // {
    //   id: "3",
    //   day: {
    //     dayName: "Wednesday",
    //     date: "May 3, 2023",
    //   },
    //   temperature1: {
    //     id: "temp5",
    //     isCollapse: false,
    //     iconName: "cloud",
    //     value: "32°C",
    //     Temperatures: [
    //       {
    //         iconName: "thermometer",
    //         value: "32°C",
    //         temperatureType: TemperatureType.Temperature,
    //       },
    //       {
    //         iconName: "humidity",
    //         value: "65%",
    //         temperatureType: TemperatureType.Humidity,
    //       },
    //       {
    //         iconName: "wind",
    //         value: "10 km/h",
    //         temperatureType: TemperatureType.WsDirection,
    //       },
    //     ],
    //     content: {
    //       heading: "Warm and Sunny",
    //       description: "It is warm and sunny throughout the day.",
    //     },
    //   },
    //   temperature2: {
    //     id: "temp6",
    //     isCollapse: true,
    //     iconName: "sun",
    //     value: "33°C",
    //     Temperatures: [
    //       {
    //         iconName: "thermometer",
    //         value: "33°C",
    //         temperatureType: TemperatureType.Temperature,
    //       },
    //       {
    //         iconName: "humidity",
    //         value: "60%",
    //         temperatureType: TemperatureType.Humidity,
    //       },
    //       {
    //         iconName: "wind",
    //         value: "5 km/h",
    //         temperatureType: TemperatureType.WsDirection,
    //       },
    //     ],
    //     content: {
    //       heading: "Hot and Clear",
    //       description: "Expect hot and clear conditions throughout the day.",
    //     },
    //   },
    // },
  ];
  const [data, setData] = useState(forecasts);
  const updateCollapse = (id: string, isOne: boolean) => {
    console.log(id, isOne);
    setData((prevState) => {
      const updatedState = prevState.map((forecast) => {
        if (forecast.id === id) {
          const updatedTemperature1 = isOne
            ? {
                ...forecast.temperature1,
                isCollapse: !forecast.temperature1.isCollapse
              }
            : forecast.temperature1;

          const updatedTemperature2 = !isOne
            ? {
                ...forecast.temperature2,
                isCollapse: !forecast.temperature2.isCollapse
              }
            : forecast.temperature2;

          return {
            ...forecast,
            temperature1: updatedTemperature1,
            temperature2: updatedTemperature2
          };
        }
        return forecast;
      });
      return updatedState;
    });
  };
  return <DailyComponent forecasts={data} updateCollapse={updateCollapse} />;
}
