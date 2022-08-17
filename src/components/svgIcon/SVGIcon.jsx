import clsx from "clsx";
import { forwardRef } from "react";
import { css, merge_css_struct } from "../../style";
import { responsiveProp } from "../../theme";
import { warn_useof_classname_props } from "../utils";
import { sizeVariantStyles, svgClasses, baseStyles } from "./svg-icon.css";

const SVGIconComponent = (props, ref) => {
  warn_useof_classname_props(props);

  const {
    css: _css_,
    unsafeClassName,
    size = "medium",
    children,
    ...rest
  } = props;

  const styles = [baseStyles];

  styles.push(responsiveProp(size, sizeVariantStyles));

  const classes = clsx(
    svgClasses.root,
    unsafeClassName,
    css(merge_css_struct(styles, _css_))
  );

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      ref={ref}
      className={classes}
    >
      {children}
    </svg>
  );
};

export const SVGIcon = forwardRef(SVGIconComponent);
