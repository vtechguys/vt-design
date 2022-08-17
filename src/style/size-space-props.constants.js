import { pxToRem, unitPX } from "./utils";

export const size_space_props = {
  // width and height
  width: pxToRem,
  height: pxToRem,
  "min-width": pxToRem,
  "max-width": pxToRem,
  "max-height": pxToRem,
  "min-height": pxToRem,
  // padding and margin are always going to be in rem
  "padding-top": pxToRem,
  "padding-right": pxToRem,
  "padding-bottom": pxToRem,
  "padding-left": pxToRem,
  "margin-top": pxToRem,
  "margin-right": pxToRem,
  "margin-bottom": pxToRem,
  "margin-left": pxToRem,
  "font-size": pxToRem,
  // borderWidth and radius are in px
  "border-top-width": unitPX,
  "border-right-width": unitPX,
  "border-bottom-width": unitPX,
  "border-left-width": unitPX,
  "border-top-left-radius": pxToRem,
  "border-top-right-radius": pxToRem,
  "border-bottom-left-radius": pxToRem,
  "border-bottom-right-radius": pxToRem
};
