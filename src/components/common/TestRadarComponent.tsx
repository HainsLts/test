import { useState } from "react";
import { RadarComponent, RadarProps } from "./RadarComponent";
import React from "react";

export default function TestRadarComponent() {
  const dummyData: RadarProps = [
    {
      id: "1",
      iconName: "thermostat",
      heading: "Severe Weather Warning",
      description:
        "Severe thunderstorms expected. Stay indoors and avoid unnecessary travel.",
      isCollapse: true
    },
    {
      id: "2",
      iconName: "radar",
      heading: "Cloudy Weather",
      description: "Cloudy skies with a chance of rain throughout the day.",
      isCollapse: true
    }
  ];

  const [data, setData] = useState(dummyData);
  const updateCollapse = (parentId: string) => {
    setData((prevData) =>
      prevData.map((parentItem) =>
        parentItem.id === parentId
          ? {
              ...parentItem,
              isCollapse: !parentItem.isCollapse
            }
          : parentItem
      )
    );
  };
  return <RadarComponent radarProps={data} updateCollapse={updateCollapse} />;
}
