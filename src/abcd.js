function parseStyles(style_object, selector) {
  // This collects `@import` rules  which are independent of any selector
  let outer = "";

  // This is for block rules collected
  let blocks = "";
  2;

  // This is for the currently processed style-rule
  let current = "";

  // each property of style_object can be a rule (3)
  // or a nested styling 7, 8
  for (const key in style_object) {
    const value = style_object[key];

    // @ rules are specific and may be further nested
    // @media rules are essentially redefining styles on-screen breakpoints
    // so they need to be processed first
    const isAtRule = key[0] === "@";

    if (isAtRule) {
      // There are 4 main at-rules
      // 1. @import
      // 2. @font-face
      // 3. @keyframe
      // 4. @media

      const isImportRule = key[1] === "i";
      const isFontFaceRule = key[1] === "f";
      const isKeyframeRule = key[1] === "k";

      if (isImportRule) {
        // import is an outer rule declaration
        outer += key + " " + value; // @import nav.css
      } else if (isFontFaceRule) {
        // font face rules are global block rules but don't need a bound selector
        blocks += parseStyles(value, key);
      } else if (isKeyframeRule) {
        // keyframe rule are processed differently by our `css` function
        // which we should see implementation at a later point
        blocks += key + "{" + parseStyles(value, "") + "}";
      } else {
        // @media rules are essentially redefining CSS on breakpoints
        // they are nested rules and are bound to selector
        blocks += key + "{" + parseStyles(value, selector) + "}";
      }
    }
    // beside the At-Rules there are other nested rules
    // 4, 5, 6
    else if (typeof value === "object") {
      // the nested rule can be simple as "&:hover"
      // or a group of selectors like "&:hover, &:active" or
      // "&:hover .wrapper"
      // "&:hover [data-toggled]"
      // many such complex selector we will have to break them into simple selectors
      // "&:active, &:hover" should be simplified to "&:hover" and "&:active"
      // finally removing self-references (&) with class-name(root-binding `selector`)
      const selectors = selector
        ? // replace multiple selectors
          selector.replace(/([^,])+/g, (_seletr) => {
            // check the key for '&:hover' like

            return key.replace(/(^:.*)|([^,])+/g, (v) => {
              // replace self-references '&' with '_seletr'

              if (/&/.test(v)) return v.replace(/&/g, _seletr);

              return _seletr ? _seletr + " " + v : v;
            });
          })
        : key;
      // each of these nested selectors create their own blocks
      // &:hover {} has its own block
      blocks += parseStyles(value, selectors);
    }
    // now that we have dealt with object `value`
    // it means we are a simple style-rules (3)
    // style-rule values should not be undefined or null
    else if (value !== undefined) {
      // in JavaScript object keys are camelCased by default
      // i.e "textAlign" but it is not a valid CSS property
      // so we should convert it to valid CSS-propoerty i.e "text-align"

      // Note: the key can be a CSS-variable which starts from "--"
      // which need to remain as it is as they will be referred by value in code somewhere.
      const isVariable = /^--/.test(key);

      // prop value as per CSS "text-align" not "textAlign"
      const cssProp = isVariable
        ? key
        : key.replace(/[A-Z]/g, "-$&").toLowerCase();

      // css prop is written as "<prop>:<value>;"
      current += cssProp + ":" + value + ";";
    }
  }

  return (
    // outer are independent rules
    // and it is most likely to be @import rule so it goes first
    outer +
    // if there are any current rules (style-rule)(3)
    // attach them to selector-block if any else attach them there
    (selector && current ? selector + "{" + current + "}" : current) +
    // all block-level CSS goes next
    blocks
  );
}
