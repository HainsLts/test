import React from "react";
import { SvgProps } from "react-native-svg";
import { icons } from "@/src/assets/ImageAssets";

export type IconName = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }
  return <IconComponent {...props} />;
};

export default Icon;
