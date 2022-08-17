import { isObject } from "lodash-es";
import { breakpoints } from "./breakpoints";

export function responsiveProp(prop, propMap) {
  let out;
  if (!isObject(prop)) {
    out = propMap[prop];
  } else {
    out = {};
    for (const bp in prop) {
      if (breakpoints[bp]) {
        console.log(propMap);
        out[breakpoints[bp]] = propMap[prop[bp]];
      }
    }
  }
  return out;
}

export function responsivePropWithoutPropMap(prop, cssPropName) {
  let out;
  if (!isObject(prop)) {
    out = { [cssPropName]: prop };
  } else {
    out = {};
    for (const bp in prop) {
      if (breakpoints[bp]) {
        out[breakpoints[bp]] = { [cssPropName]: prop[bp] };
      }
    }
  }
  return out;
}
