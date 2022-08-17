import { isArray } from "lodash-es";

export const EmptyArray = [];
export const EmptyObject = {};

export const merge_css_struct = (currentCSS, externalCSS = null) => {
  const out = [];

  if (isArray(currentCSS)) {
    out.push(...currentCSS);
  } else {
    out.push(currentCSS);
  }

  if (isArray(externalCSS)) {
    out.push(...externalCSS);
  } else {
    out.push(externalCSS);
  }

  return out;
};

const pxToRemMultiplier = 1 / 16;
export const unitPX = (val) => `${parseFloat(val)}px`;
export const unitREM = (val) => `${parseFloat(val)}rem`;
export const unitEM = (val) => `${parseFloat(val)}em`;
export const unitPercent = (val) => `${parseFloat(val)}%`;
export const fraction = (n, d) => n / d;
export const percent = (n, d) => fraction(n, d) * 100;
export const pxToRem = (val) => `${pxToRemMultiplier * parseFloat(val)}rem`;
export const define_css_var = (varName) => `--${varName}`;
export const lookup_css_var = (varName, fallback) =>
  `var(${varName}${fallback ? `,${fallback}` : ""})`;
