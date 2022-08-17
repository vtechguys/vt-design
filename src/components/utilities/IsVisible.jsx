import { forwardRef } from "react";

function IsVisibleComponent(props) {
  const {
    Component = "div",
    show = false,
    unmountOnHide,
    children,
    ...componentProps
  } = props;

  let childjsx = children;

  if (!show && unmountOnHide) {
    childjsx = null;
  }

  return (
    <Component style={{ display: show ? "flex" : "none" }} {...componentProps}>
      {childjsx}
    </Component>
  );
}

export const IsVisible = forwardRef(IsVisibleComponent);
