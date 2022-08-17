import { _css_ } from "./core";
import { evaluate_css_declation } from "./eval-css-declaration";

export const css = _css_.bind({ css_evaulate: evaluate_css_declation });

export const globalCSS = _css_.bind({
  css_evaulate: evaluate_css_declation,
  css_append: true,
  css_global: true
});

export const keyframes = _css_.bind({
  css_keyframes: true,
  css_evaulate: evaluate_css_declation
});
