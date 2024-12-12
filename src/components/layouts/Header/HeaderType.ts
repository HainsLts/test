import { IconName } from "@/src/components/shared/Icon";

export enum HeaderType {
  Default = "Default",
  LogoWithButton = "LogoWithButton",
  BackButtonWithAction = "BackButtonWithAction",
  BackWithoutAction = "BackWithoutAction",
  CancelSave = "CancelSaveButton"
}

export type HeaderConfig = {
  title?: string;
  actions?: {
    type: "icon" | "text";
    label?: string;
    icon?: IconName;
    onPress: () => void;
  }[];
};

export const headerConfigs: Record<HeaderType, HeaderConfig> = {
  [HeaderType.Default]: {
    title: "Title"
  },
  [HeaderType.LogoWithButton]: {
    title: "Title"
  },
  [HeaderType.BackButtonWithAction]: {
    title: "Title"
  },
  [HeaderType.BackWithoutAction]: {
    title: "Title",
    actions: [
      {
        type: "text",
        label: "Cancel",
        onPress: () => console.log("Cancel clicked")
      },
      {
        type: "text",
        label: "Save",
        onPress: () => console.log("Save clicked")
      }
    ]
  },
  [HeaderType.CancelSave]: {
    title: "Title",
    actions: [
      {
        type: "icon",
        icon: "fbHome",
        onPress: () => console.log("Settings clicked")
      }
    ]
  }
};
