import { _evaluate_ } from "./core";
import { atomic_props, warn_useof_long_form } from "./atomic-props.constants";
import { size_space_props } from "./size-space-props.constants";

function transform_css_value(css_prop, css_value) {
  let val = css_value;

  if (size_space_props[css_prop] && typeof css_value === "number") {
    val = size_space_props[css_prop](css_value);
  }
  return val;
}

function evaluate_css_declation(css_prop, css_value) {
  let props = css_prop;
  // validation during dev
  if (process?.env?.NODE_ENV !== "production") {
    warn_useof_long_form(css_prop);
  }

  const isAtomicProp = Boolean(atomic_props[css_prop]);

  const isSpecialProps = isAtomicProp;

  if (!isSpecialProps) {
    return _evaluate_(css_prop, transform_css_value(css_prop, css_value));
  }

  if (isAtomicProp) {
    props = atomic_props[css_prop];
  }

  let css = "";

  if (!Array.isArray(props)) {
    css += _evaluate_(props, transform_css_value(props, css_value));
  } else {
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      css += _evaluate_(prop, transform_css_value(prop, css_value));
    }
  }

  return css;
}

export { evaluate_css_declation };
