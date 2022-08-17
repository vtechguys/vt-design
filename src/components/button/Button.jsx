import clsx from "clsx";
import { css } from "../../style";
import { responsiveProp } from "../../theme";
import { ButtonBase } from "../buttonBase";
import {
  disabledVariantStyles,
  sizeStyles,
  variantStyles,
  buttonClasses,
  withIconStyles,
  iconStyles
} from "./button.css";
import { warn_useof_classname_props } from "../utils";

export function Button(props) {
  // warn use of class-name
  warn_useof_classname_props(props);
  // size, variant, renderIcon: Icon adds its own styles
  const {
    // size, variant, renderIcon adds its own styles
    size = "medium",
    variant = "primary",
    renderIcon: Icon,
    // css styles overrride
    css: _css_ = null,
    // label
    children,
    // button base props
    ...buttonBaseProps
  } = props;

  const styles = [
    Boolean(Icon) ? withIconStyles : null,
    responsiveProp(size, sizeStyles),
    responsiveProp(
      variant,
      buttonBaseProps.disabled ? disabledVariantStyles : variantStyles
    )
  ];

  return (
    <ButtonBase
      {...buttonBaseProps}
      css={styles}
      unsafeClassName={clsx(
        buttonClasses.button,
        buttonBaseProps.unsafeClassName
      )}
    >
      {children}
    </ButtonBase>
  );
}
