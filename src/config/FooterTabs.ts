import { IconName } from "../components/shared/Icon";

export type FooterTabItem = {
  id: string;
  label: string;
  icon: IconName;
  route: string;
  visible?: boolean;
};

const footerTabsConfig: FooterTabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: "fbHome",
    route: "home",
    visible: true
  },
  {
    id: "hourly",
    label: "Hourly",
    icon: "fbThermometer",
    route: "hourly",
    visible: true
  },
  {
    id: "daily",
    label: "Daily",
    icon: "fbCloud",
    route: "daily",
    visible: true
  },
  {
    id: "map",
    label: "Map",
    icon: "fbMap",
    route: "Map",
    visible: true
  },
  {
    id: "more",
    label: "More",
    icon: "fbDotThree",
    route: "more",
    visible: true
  }
];
const footerTabsMap = footerTabsConfig.reduce(
  (map, item) => {
    map[item.id] = item;
    return map;
  },
  {} as Record<string, FooterTabItem>
);
export { footerTabsConfig, footerTabsMap };
