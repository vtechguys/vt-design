const sheet = {
  data: ""
};

const getStyleSheet = (target) => {
  let stylesheet = target;
  if (typeof window !== "undefined") {
    let tag = target ? target.querySelector(`#css-in-js`) : window["css-in-js"];
    if (!tag) {
      const _target_ = target || document.head;
      const styleTag = Object.assign(
        _target_.appendChild(document.createElement("style")),
        { id: "css-in-js", innerHTML: " " }
      );

      tag = styleTag;
    }
    stylesheet = tag.firstChild;
  }
  if (!stylesheet) {
    stylesheet = sheet;
  }

  return stylesheet;
};

const updateStyleSheet = (cssStyles, stylesheet, append, global) => {
  let css = stylesheet.data;
  const hasCssStyle = css.includes(cssStyles);

  if (!hasCssStyle) {
    css = append ? cssStyles + css : css + cssStyles;
  }

  stylesheet.data = css;
};

export { getStyleSheet, updateStyleSheet };
