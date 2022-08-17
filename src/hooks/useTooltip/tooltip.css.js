import { unitPX } from "../../style";

export const activeStyles = {
  "--scale": 1
};

export const baseStyles = {
  position: "relative"
};

const basePseudoElementStyles = {
  "--scale": 0,
  "--arrow-size": unitPX(20),
  "--tooltip-color": "green",
  position: "absolute"
};

export const positionStyles = {
  top: {
    "&::after, &::before": {
      ...basePseudoElementStyles,
      top: -4,
      left: "50%",
      transform:
        "translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale))",
      transition: "150ms transform",
      transformOrigin: "bottom center"
    }
  },
  right: {
    ...basePseudoElementStyles
  },
  bottom: {
    ...basePseudoElementStyles,
    bottom: -4,
    left: "50%"
  },
  left: { ...basePseudoElementStyles },
  topLeft: { ...basePseudoElementStyles },
  topRight: { ...basePseudoElementStyles },
  bottomRight: { ...basePseudoElementStyles },
  bottomLeft: { ...basePseudoElementStyles }
};

export const tooltipBoxStyles = {
  "&::before": {
    "--translate-y": "calc(-100% - var(--arrow-size))",
    content: "attr(data-tooltip)",
    color: "white",
    padding: 8,
    borderRadius: "0.3rem",
    textAlign: "center",
    width: "max-content",
    maxWidth: "100%",
    background: "var(--tooltip-color)"
  }
};
