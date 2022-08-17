import { transitions } from "../../theme";

export const svgClasses = {
  root: "ui-svg-root"
};

export const baseStyles = {
  boxSizing: "border-box",
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  fill: "currentColor",
  flexShrink: 0,
  transition: transitions.create("fill", {
    duration: transitions.duration.short
  })
};

export const sizeVariantStyles = {
  tiny: {
    fontSize: 16
  },
  small: {
    fontSize: 20
  },
  medium: {
    fontSize: 24
  },
  large: {
    fontSize: 35
  },
  inherit: {
    fontSize: "inherit"
  }
};
