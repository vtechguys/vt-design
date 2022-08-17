import clsx from "clsx";
import { isNil } from "lodash-es";
import "./styles.css";

export function useTooltip({
  text,
  placement = "top",
  open,
  restrictWidth = false,
  arrow = false,
  grow = false
}) {
  return {
    className: clsx({
      "with-tooltip": true,
      "with-tooltip--hover": isNil(open),
      "with-tooltip--active": open,
      "with-tooltip--restrict-width": restrictWidth,
      "with-tooltip--animation": grow,
      "with-tooltip--arrow": arrow,
      [`with-tooltip--${placement}`]: placement,
      [`with-tooltip--arrow-${placement}`]: placement
    }),
    tooltipProps: {
      "data-tooltip": text
    }
  };
}
