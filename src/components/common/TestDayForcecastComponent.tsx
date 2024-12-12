import { useState } from "react";
import React from "react";
import DayForcecastComponent, {
  DayForcecastProps
} from "./DayForcecastComponent";

export default function TestDayForcecastComponent() {
  const dummyData: DayForcecastProps = [
    {
      id: "1",
      linearColor: ["#F0F2F5", "#F0F2F5"],
      iconName: "partly-sunny",
      hour: "11 AM",
      temp: "42",
      humidity: "0 %",
      colorName: "AFB8C0",
      humidityColor: "#5A6672"
    },
    {
      id: "2",
      linearColor: ["#66D1E0", "#3C8CE7"],
      iconName: "partly-sunny",
      hour: "11 AM",
      temp: "42",
      humidity: "12 %",
      colorName: "#FFFFFF",
      humidityColor: "#F8FAFF"
    }
    // Add more days as needed
  ];

  const [data, setData] = useState(dummyData);
  return <DayForcecastComponent dayForcecastProps={data} />;
}
