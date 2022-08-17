import { forwardRef } from "react";

function PortalComponent(props, fwdRef) {
  const { container = window?.document?.body, ...restProps } = props;
  return container ? <div {...restProps} ref={fwdRef} /> : null;
}

export const Portal = forwardRef(PortalComponent);
