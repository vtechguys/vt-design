import { isString } from "lodash-es";
import { hash } from "./_hash.util";
import { parse } from "./parse.util";
import { getStyleSheet, updateStyleSheet } from "./_sheet.util";
import { mergeN } from "../../utils";

const stringifiedToClassName = new Map();
const classNameToCssMap = new Map();
const stringify = JSON.stringify;

function _css_(val) {
  // context in which css function is called
  const _context_ = this || {};
  // internal value
  let _val_ = val;
  // reduce value to a simple object
  if (Array.isArray(val)) {
    _val_ = mergeN(val);
  }

  const stringifiedStyle = stringify(_val_);
  // lookup for the stringified-style in stingified-classname map
  const hasSeenStringifiedStyle = stringifiedToClassName.has(stringifiedStyle);

  // not seen this stringified-style before so record it
  if (!hasSeenStringifiedStyle) {
    stringifiedToClassName.set(stringifiedStyle, hash(stringifiedStyle));
  }
  // classname for style-object
  const className = stringifiedToClassName.get(stringifiedStyle);

  // lookup for the classname in classname-css map
  const hasCSS = classNameToCssMap.has(className);

  // not seen this classname before make an entry for it

  console.log({ k: _context_.css_keyframes });

  if (!hasCSS) {
    classNameToCssMap.set(
      className,
      parse(
        _context_.css_keyframes
          ? { [`@keyframes ${className}`]: _val_ }
          : _val_,
        _context_.css_global ? "" : `.${className}`,
        _context_.css_evaulate
      )
    );
  }

  const CSS = classNameToCssMap.get(className);

  updateStyleSheet(
    CSS,
    getStyleSheet(_context_.target, _context_.css_global),
    _context_.css_append || _context_.css_global ? true : false
  );

  return className;
}

const _evaluate_ = (cssProp, val) => {
  if (process?.env?.NODE_ENV !== "production") {
    if (isString(val) && val.includes("!important")) {
      console.warn(
        `[${val}] is not valid as it contains !important. It is not a good way of overcomming specificity, it is recommended not to use !important.`
      );
    }
  }
  return cssProp + ":" + val + ";";
};

export { _css_, _evaluate_ };
