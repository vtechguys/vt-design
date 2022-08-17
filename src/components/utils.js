import { isString } from "lodash-es";

export const warn_useof_classname_props = (props) => {
  if (process?.env?.NODE_ENV !== "production") {
    console.warn(
      `className prop is not allowed, you may need 'unsafeClassName' if absolutely needed.`
    );
  }
};
