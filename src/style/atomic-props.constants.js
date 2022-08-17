export const atomic_props = {
  // padding
  padding: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
  "padding-x": ["padding-left", "padding-right"],
  "padding-y": ["padding-top", "padding-bottom"],
  // margin
  margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
  "margin-x": ["margin-left", "margin-right"],
  "margin-y": ["margin-top", "margin-bottom"],
  // short hand for width and size
  size: ["width", "height"],
  // border width
  "border-width": [
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width"
  ],
  // border color
  "border-color": [
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color"
  ],
  // border style
  "border-style": [
    "border-top-style",
    "border-right-style",
    "border-bottom-style",
    "border-left-style"
  ],
  // border radius
  "border-radius": [
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-left-radius",
    "border-bottom-right-radius"
  ]
};

const long_form_props = ["padding", "margin", "border", "border-radius"];

export const warn_useof_long_form = (css_prop) => {
  if (long_form_props.includes(css_prop)) {
    console.warn(`property shorthand ${css_prop} not allowed`);
  }
};
