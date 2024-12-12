import { useState } from "react";
import {
  AlertWeatherProps,
  AlertWeatherComponent,
  AlertWeatherType
} from "./AlertWeatherComponent";
import { Text } from "native-base";
import React from "react";

export default function TestAlertWeatherComponent() {
  const dummyData: AlertWeatherProps = [
    {
      id: "1",
      day: "Monday",
      alertWeathers: [
        {
          id: "1",
          isCollapse: true,
          alertWeatherType: AlertWeatherType.AcUnit,
          color: "blue.500",
          backgroundColor: "blue.50",
          iconName: "ac-unit",
          heading: "High UV Index",
          description:
            "UV levels are very high today. Use sunscreen and protective clothing."
        },
        {
          id: "2",
          isCollapse: true,
          alertWeatherType: AlertWeatherType.Visibility,
          color: "orange.500",
          backgroundColor: "orange.50",
          iconName: "visibility",
          heading: "Cloudy Skies",
          description:
            "Expect cloudy skies throughout the day. Temperatures remain mild."
        }
      ]
    },
    {
      id: "2",
      day: "Tuesday",
      alertWeathers: [
        {
          id: "1",
          isCollapse: true,
          alertWeatherType: AlertWeatherType.AcUnit,
          color: "blue.500",
          backgroundColor: "blue.50",
          iconName: "ac-unit",
          heading: "High UV Index",
          description:
            "UV levels are very high today. Use sunscreen and protective clothing."
        }
      ]
    }
    // {
    //   id: "2",
    //   isCollapse: true,
    //   day: "Tuesday",
    //   alertWeatherType: AlertWeatherType.Visibility,
    //   color: "orange.500",
    //   backgroundColor: "orange.50",
    //   iconName: "visibility",
    //   heading: "Cloudy Skies",
    //   description:
    //     "Expect cloudy skies throughout the day. Temperatures remain mild."
    // },
    // {
    //   id: "3",
    //   isCollapse: true,
    //   day: "Wednesday",
    //   alertWeatherType: AlertWeatherType.Cloud,
    //   color: "orange.500",
    //   backgroundColor: "orange.50",
    //   iconName: "cloud",
    //   heading: "Clear Weather",
    //   description:
    //     "A beautiful day with clear skies and comfortable temperatures."
    // },
    // {
    //   id: "4",
    //   isCollapse: true,
    //   day: "Thursday",
    //   alertWeatherType: AlertWeatherType.Warning,
    //   color: "warning.500",
    //   backgroundColor: "warning.50",
    //   iconName: "warning-amber",
    //   heading: "Severe Thunderstorms",
    //   description:
    //     "Severe thunderstorms expected. Stay indoors and avoid unnecessary travel."
    // }
  ];

  const [data, setData] = useState(dummyData);
  const updateCollapse = (parentId: string, childId: string) => {
    setData((prevData) =>
      prevData.map((parentItem) =>
        parentItem.id === parentId
          ? {
              ...parentItem,
              alertWeathers: parentItem.alertWeathers.map((childItem) =>
                childItem.id === childId
                  ? { ...childItem, isCollapse: !childItem.isCollapse }
                  : childItem
              )
            }
          : parentItem
      )
    );
  };
  return (
      <AlertWeatherComponent
        alertWeatherProps={data}
        updateCollapse={updateCollapse}
      />
  );
}
