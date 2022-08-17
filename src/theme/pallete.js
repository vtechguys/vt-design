import { memo } from "react";
import { define_css_var, globalCSS, lookup_css_var } from "../style";

const tokens = {
  [define_css_var("color-misc-black")]: "#000",
  [define_css_var("color-misc-white")]: "#fff",
  // red
  [define_css_var("color-red-10")]: "red",
  [define_css_var("color-red-50")]: "#fa4d56",
  [define_css_var("color-red-60")]: "#da1e28",
  // blue
  [define_css_var("color-blue-60")]: "#0f62fe",
  // gray
  [define_css_var("color-gray-60")]: "#6f6f6f",
  [define_css_var("color-gray-80")]: "#393939"
};

export const pallete = {
  misc: {
    black: lookup_css_var(
      define_css_var("color-misc-black"),
      tokens[define_css_var("color-misc-black")]
    ),
    white: lookup_css_var(
      define_css_var("color-misc-white"),
      tokens[define_css_var("color-misc-white")]
    )
  },
  red: {
    10: lookup_css_var(
      define_css_var("color-red-10"),
      tokens[define_css_var("color-red-10")]
    ),
    50: lookup_css_var(
      define_css_var("color-red-50"),
      tokens[define_css_var("color-red-50")]
    ),
    60: lookup_css_var(
      define_css_var("color-red-60"),
      tokens[define_css_var("color-red-60")]
    )
  },
  blue: {
    60: lookup_css_var(
      define_css_var("color-blue-60"),
      tokens[define_css_var("color-blue-60")]
    )
  },
  gray: {
    60: lookup_css_var(
      define_css_var("color-gray-60"),
      tokens[define_css_var("color-gray-60")]
    ),
    80: lookup_css_var(
      define_css_var("color-gray-80"),
      tokens[define_css_var("color-gray-80")]
    )
  }
};

const pallete_css = { ":root": tokens };

export const PalleteTokens = memo(() => {
  globalCSS(pallete_css);
  return null;
});
