import React from "react";
import {
  Tooltip,
  Button,
  ITooltipProps,
} from "native-base";

interface TooltipReusableProps extends ITooltipProps {
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
}

const TooltipReusable: React.FC<TooltipReusableProps> = ({
  label,
  placement = "top",
  children,
  ...tooltipProps
}) => {
  return (
      <Tooltip
        label={label}
        placement={placement}
        bg="gray.800"
        _text={{ color: "white", fontSize: "sm" }}
        openDelay={300}
        {...tooltipProps}
      >
        {children || <Button variant="ghost" />}
      </Tooltip>
  );
};

export default TooltipReusable;
