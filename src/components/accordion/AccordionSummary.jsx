import {
  buttonBaseStyles,
  buttonCloseStyles,
  buttonOpenStyles
} from "./accordion.css";
import { ButtonBase } from "../buttonBase";
import {
  useAccordionStore,
  toggleAccordionAction
} from "../../hooks/useAccordion";
import { merge_css_struct } from "../../style";

export function AccordionSummary({
  css,
  children,
  summary,
  accordionId,
  onClick,
  ...props
}) {
  const [state, dispatch] = useAccordionStore();

  const isOpen = state.includes(accordionId);

  const onClickHandler = (e) => {
    dispatch(toggleAccordionAction(accordionId));
    onClick?.(e);
  };

  const styles = [buttonBaseStyles];

  if (isOpen) {
    styles.push(buttonOpenStyles);
  } else {
    styles.push(buttonCloseStyles);
  }

  return (
    <ButtonBase
      onClick={onClickHandler}
      css={merge_css_struct(styles, css)}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
