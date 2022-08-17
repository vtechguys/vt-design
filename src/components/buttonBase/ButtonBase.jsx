import clsx from "clsx";
import { css, merge_css_struct } from "../../style";
import { warn_useof_classname_props } from "../utils";
import { baseStyles, buttonBaseClasses } from "./button-base.css";

export function ButtonBase(props) {
  // warn use of unsafe props
  warn_useof_classname_props(props);
  // css prop adds special styles
  const {
    css: _css_ = null,
    // append any unsafe classes
    unsafeClassName,
    // rest are native button props
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={clsx(
        // buttonBase classes
        buttonBaseClasses.button,
        props.disabled && buttonBaseClasses.disabled,
        // classname from parent
        unsafeClassName,
        // merged css classes
        css(merge_css_struct(baseStyles, _css_))
      )}
    />
  );
}
