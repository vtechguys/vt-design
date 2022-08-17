import { join } from "lodash-es";
import { theme, transitions } from "../../theme";

const _transition_options_ = {
  animation: "cubic-bezier(0,0,.38,.9)",
  duration: transitions.duration.micro
};

export const buttonBaseClasses = {
  button: "ui-c-button-base",
  disabled: "ui-c-button-base--disabled"
};

export const baseStyles = {
  // inline-flex
  display: "inline-flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // cusror and vertical-align
  cursor: "pointer",
  verticalAlign: "top",
  // width and position
  position: "relative",
  width: "max-content",
  maxWidth: 320,
  // border and outline default
  border: "none",
  outline: "none",
  // margin and padding
  margin: 0,
  padding: 0,
  // font
  fontFamily: "inherit",
  fontSize: 14,
  fontWeight: 400,
  textDecoration: "none",
  textAlign: "left",
  // transition on hover ant other state
  // @TODO: consume duration from theme
  transition: join(
    [
      transitions.create("background-color", _transition_options_),
      transitions.create("box-shadow", _transition_options_),
      transitions.create("border-color", _transition_options_),
      transitions.create("outline", _transition_options_)
    ],
    ","
  ),
  boxSizing: "border-box"
};
