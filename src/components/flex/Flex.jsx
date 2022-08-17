import clsx from "clsx";
import { isNil } from "lodash-es";
import { css, merge_css_struct } from "../../style";
import { responsiveProp, responsivePropWithoutPropMap } from "../../theme";
import {
  flexClasses,
  containerStyles,
  spanStyles,
  skipStyles,
  itemStyles
} from "./flex.css";

export function Flex(props) {
  const {
    display,
    direction,

    // flex item
    span,
    skip,
    item,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
    order,
    // flex container
    container,
    alignContent,
    alignItems,
    justifyContent,
    flexWrap,
    // modifier css
    css: _css_,
    // modifier classname
    unsafeClassName,
    // component
    component: Component = "div",
    ...componentProps
  } = props;

  const styles = [];
  // container
  if (container) {
    styles.push(containerStyles);
  }
  // flex item
  if (item) {
    styles.push(itemStyles);
    if (!isNil(span)) {
      styles.push(responsiveProp(span, spanStyles));
    }

    if (!isNil(skip)) {
      styles.push(responsiveProp(skip, skipStyles));
    }
  }
  if (!isNil(direction)) {
    styles.push(responsivePropWithoutPropMap(direction, "flexDirection"));
  }

  if (!isNil(display)) {
    styles.push(responsivePropWithoutPropMap(display, "display"));
  }

  if (!isNil(flexGrow)) {
    styles.push(responsivePropWithoutPropMap(flexGrow, "flexGrow"));
  }

  if (!isNil(flexShrink)) {
    styles.push(responsivePropWithoutPropMap(flexShrink, "flexShrink"));
  }

  if (!isNil(flexBasis)) {
    styles.push(responsivePropWithoutPropMap(flexBasis, "flexBasis"));
  }

  if (!isNil(justifyContent)) {
    styles.push(responsivePropWithoutPropMap(justifyContent, "justifyContent"));
  }

  if (!isNil(alignContent)) {
    styles.push(responsivePropWithoutPropMap(alignContent, "alignContent"));
  }

  if (!isNil(alignSelf)) {
    styles.push(responsivePropWithoutPropMap(alignSelf, "alignSelf"));
  }

  if (!isNil(alignItems)) {
    styles.push(responsivePropWithoutPropMap(alignItems, "alignItems"));
  }

  const classes = clsx(
    flexClasses.root,
    container && flexClasses.container,
    item && flexClasses.item,
    unsafeClassName,
    css(merge_css_struct(styles, _css_))
  );

  return <Component {...componentProps} className={classes} />;
}
