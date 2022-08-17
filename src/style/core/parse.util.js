// parses `js-style-object` bound to given `css-selector` to generate valid css
// style: js style object that needs to be paresed to css
// selector: css-selector to which this style/css is bound to
export function parse(style, selector, css_evaulate) {
  // outer css is `@import "navbar.css";`
  let outer = "";
  // a block css is `.center { justifyContent: 'center', alignItems: 'center' }
  // it is most of the times wrapped in blocks => {...css...}
  let blocks = "";
  // style obj to css prop
  let current = "";

  // each key in style object is css property or a css syntax
  for (const key in style) {
    const val = style[key];

    // key is @rule in css ex: @import @media @font-face
    // checking if 0 index key is @rule
    const isAtRule = key[0] === "@";
    // val is object and
    if (isAtRule) {
      const isImportRule = key[1] === "i";
      const isFontFaceRule = key[1] === "f";
      const isKeyframeRule = key[1] === "k";

      if (isImportRule) {
        // import is an outer rule declaration
        outer += key + " " + val;
      } else if (isFontFaceRule) {
        // key: val
        // @font-face: { fontFamilty: myfont }
        // the style value inside `val` need to be applied on selector `@font-face`
        // style = { fontFamily: myfont }, selector = '@font-face
        // selector for @font-face are globally itselef
        blocks += parse(val, key, css_evaulate);
      } else if (isKeyframeRule) {
        // @keyframes
        // ?
        // ?
        blocks += key + "{" + parse(val, "", css_evaulate) + "}";
      } else {
        // other @rules example:
        // @media comprises further style declarations (`val`)
        // @media { '&': { color: red }, '&:hover': { color: green } }
        // @media rule applied on given selector
        blocks += key + "{" + parse(val, selector, css_evaulate) + "}";
      }
    }
    // value is an object instead of primitive value like 'red', 'center'
    // this is mostly found in syntax '&:hover': {}
    // or a combination of multiple selectors '&::before, &::after': {}
    else if (typeof val === "object") {
      const simpleSelector = selector
        ? // check if there is multiple selector
          // for these multiple selectors transform these selectors into valid selectors
          // &::before, &::after'
          selector.replace(/([^,])+/g, (sel) => {
            // check the key for '&:hover'
            return key.replace(/(^:.*)|([^,])+/g, (p) => {
              // replace '&' with 'sel'
              if (/&/.test(p)) return p.replace(/&/g, sel);
              return sel ? sel + " " + p : p;
            });
          })
        : key;

      blocks += parse(val, simpleSelector, css_evaulate);
    }
    // value is a primitive like 'red', 'center'
    else if (val !== undefined) {
      // convert css-object-key defination to css-prop-key
      const cssProp =
        // if it is a variable don't apply conversion
        /^--/.test(key)
          ? // variable are refered by name
            key
          : // converts backgroundColor to background-color
            key.replace(/[A-Z]/g, "-$&").toLowerCase();
      current += css_evaulate(cssProp, val);
    }
  }

  // order of css
  // outer
  // current on selector or global
  // blocks @media

  return (
    outer +
    (selector && current ? selector + "{" + current + "}" : current) +
    blocks
  );
}
